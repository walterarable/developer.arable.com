# Data

## Understanding the Schema

The [schemas](https://api-user.arable.cloud/api/v2/doc#operation/get_schemas) and [tables](https://api-user.arable.cloud/api/v2/doc#operation/get_schema) endpoints were intended to show the descriptions of the data that is available within the Arable platform.

Fetching the available tables is the first step

Example:
```bash curl -X GET \
  https://api-user.arable.cloud/api/v2/schemas \
  -H 'Authorization: Basic <user:password>
```

The result will be an array of table names. Each of these table names can be used in a subsequent call where it becomes the URL parameter to the `/schemas` endpoint. To get the metadata for the `daily` table, for example, you would specify `/schemas/daily`.

Example: 
```bash curl -X GET \
  https://api-user.arable.cloud/api/v2/schemas/daily \
  -H 'Authorization: Basic <user:password>
```

The result is an array of JSON objects that contain the metadata for a column including `description`, `data_type` and `column_name`. 

Example:
```
[{
        "description": "UTC time",
        "data_type": "timestamp with time zone",
        "column_name": "create_time"
    },
    {
        "description": "Crop water demand (mm/day)",
        "data_type": "real",
        "column_name": "crop_water_demand"
    },
    ...
]
```

This information can be helpful when interpreting the data that is returned or for narrowing down the data requested to only the columns necessary or selected.

## Requesting Data

