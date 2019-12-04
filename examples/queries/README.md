# Example queries

These are mostly useless queries to show how the tool works.

* [combined.ksql](combined.ksql) - combines output from the combined streams joining items,
orders, and users.
* [hourly-sales.ksql](hourly-sales.ksql) - joins items and orders and outputs 1 row per hour,
example of how multiple queries can depend on the same input(combined.ksql).
* [item-root.ksql](item-root.ksql) - creates a stream from a topic
* [one.ksql](one.ksql) - combines items and orders
* [order-root.ksql](order-root.ksql) - creates a stream from a topic
* [two.ksql](two.ksql) - has example of debug query that will not be in the output,
combines orders and users
* [user-root.ksql](user-root.ksql) - creates a stream from a topic
