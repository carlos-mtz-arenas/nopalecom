# about

Here you can find the definition of the schema and the initial data for the application to work.

# migrations

For now, we are going to manually load the schema and the initial data for the application. After that, all migrations can be applied following a naming convention such as:

```
migrations/
  0_<small-description>.sql
```

For example:

```
migrations/
  0_product_gallery.sql
  1_employee_permissions.sql
```

Such migrations should contain the selection and target of the DB instance it needs to hit, for example:

```
use nopalecom_db;

create table if not exists my_new_table ...
```
