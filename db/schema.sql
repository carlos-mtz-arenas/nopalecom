-- users
create table if not exists employees (
  uuid BINARY(16) primary key,
  full_name varchar(255) not null,
  username varchar(255) unique not null,
  password varchar(255) not null,
  role ENUM('admin', 'product_manager', 'order_manager') NOT NULL,
  is_active tinyint(1) not null default 0,
  is_blocked tinyint(1) not null default 0,
  login_tries tinyint(1) not null default 0,
  is_password_reset tinyint(1) not null default 0,
  password_reset_token varchar(255),
  password_reset_token_generated timestamp,
  created_at timestamp default current_timestamp,
  updated_at timestamp default current_timestamp on update current_timestamp
);

-- actual ecommerce
create table if not exists stores (
  uuid binary(16) primary key,
  name varchar(255) not null unique,
  address varchar(255) not null,
  created_at timestamp default current_timestamp,
  updated_at timestamp default current_timestamp on update current_timestamp
);

create table if not exists products (
  uuid BINARY(16) primary key,
  is_enabled tinyint(1) default 1,
  parent_uuid binary(16) null, -- in case of having variants, this is how we know if we belong to one
  -- when looking for products, we would have { parent info, variants: [{ variant1 }, { variant2 }, ... ]}
  -- so we would need to make sure at the application level not to have variants within variants
  sku varchar(50) not null unique,
  name varchar(150) not null,
  description text not null,
  -- the following two attributes are:
  -- base_price which indicates how much it would usually costs
  -- discount_price indicates a price that already has a discount built-in
  -- so the idea is that we can show how much you're saving by calculating: base_price - discount_price
  base_price decimal(10, 2) not null,
  discount_price decimal(10, 2),
  -- some of the most common units, things like small, medium, large can be a custom attribute such as "size"
  -- and if you need to extend this, we would highly suggest to have a migration for it so that you can explicitly look at the update statement for it
  unit enum('kgs', 'gr', 'lb', 'oz', 'litters', 'ml', 'gal', 'meters', 'cm', 'in', 'pieces'),
  created_at timestamp default current_timestamp,
  updated_at timestamp default current_timestamp on update current_timestamp
);

create table if not exists inventory (
  -- we don't really need a uuid for this table
  id bigint auto_increment primary key,
  -- we're not using foreign keys as we'll probably be able to split this
  -- into its own separate service in the future
  store_id binary(16) not null,
  product_id binary(16) not null,
  stock int not null default 0,
  created_at timestamp default current_timestamp,
  updated_at timestamp default current_timestamp on update current_timestamp,
  unique (store_id, product_id)
)
