# ExpressJS Workshop!

By Kane Erryl G. Castillano


# Users

This README provides information about the routes available for managing users in the application. 

## /users/ (GET)
 - Retrieves a list of  all users along with their details including full name, age, birthday, and organisation name.
 #### Sample Reponse:
``` 
[
	{
		"id": 1,
		"full_name": "Erryl Castillano",
		"age": 28,
		"birthday": "2021-03-30T16:00:00.000Z",
		"organisation_name": "Toro Cloud"
	},
	{
		"id": 2,
		"full_name": "Reighx Campos",
		"age": 24,
		"birthday": "2021-03-30T16:00:00.000Z",
		"organisation_name": "Twist Resources"
	},
	{
		"id": 3,
		"full_name": "Nami Fortune",
		"age": 18,
		"birthday": "2024-09-30T17:20:31.000Z",
		"organisation_name": "Toro Cloud"
	}
]
```

## /users/:userId (GET by ID)

- Retrieves a specific user by their unique ID. - Parameters: -  `userId`: The ID of the user to retrieve.

#### Sample Reponse:
``` 
[
	{
		"id": 1,
		"full_name": "Erryl Castillano",
		"age": 28,
		"birthday": "2021-03-30T16:00:00.000Z",
		"organisation_name": "Toro Cloud"
	}
]
```

## /users/ (POST)

- Creates a new user with the provided details. - Request Body: -  `first_name`: First name of the user. -  `last_name`: Last name of the user. -  `age`: Age of the user. -  `birthday`: Birthday of the user. -  `organisation_id`: ID of the organisation the user belongs to.

#### Request Body:
``` 
{
	"first_name": "Telegenexx",
	"last_name": "Global Program",
	"age": 56,
	"birhday": "2021-03-30 16:00:00",
	"organisation_id": 1
}
```
#### Actual Response:
```
[
	{
		"user_id": 12,
		"full_name": "Telegenexx Global Program",
		"age": 56,
		"birthday": "2021-03-30T16:00:00.000Z",
		"organisation_name": "Toro Cloud"
	}
]
```

## /users/:userId (PUT)

- Updates the details of a specific user. - Parameters: -  `userId`: The ID of the user to update. - Request Body (JSON): -  `first_name` (optional): New first name of the user. -  `last_name` (optional): New last name of the user. -  `age` (optional): New age of the user. -  `birthday` (optional): New birthday of the user. -  `organisation_id` (optional): New ID of the organisation the user belongs to.
#### Request Body:
``` 
{
	"first_name": "Telegenex",
	"last_name": "Global"
}
```
#### Actual Response:
```
[
	{
		"user_id": 12,
		"full_name": "Telegenex Global",
		"age": 56,
		"birthday": "2021-03-30T16:00:00.000Z",
		"organisation_name": "Toro Cloud"
	}
]
```


# Organization

This README provides information about the routes available for managing organizations in the application.

## /organisation/ (GET)

Retrieves a list of all organizations along with their details.

 #### Sample Response:
``` 
[
	{
		"id": 1,
		"name": "Toro Cloud"
	},
	{
		"id": 2,
		"name": "Shore360"
	}
]
```

## /organisation/:organisationId (GET)

Retrieves a specific organization by its unique ID. - Parameters: -  `organisationId`: The ID of the organization to retrieve.

 #### Sample Response:
``` 
[
	{
		"id": 1,
		"name": "Toro Cloud"
	}
]
```
## /organisation/ (POST)

Retrieves a specific organization by its unique ID. - Parameters: -  `organisationId`: The ID of the organization to retrieve.

 #### Request Body:
``` 
[
	{
		
		"name": "TwistResources"
	}
]
```

 #### Actual Response:
``` 
[
	{
		"id":  6,
		"name": "TwistResources"
	}
]
```

## /organisation/:organisationId (PUT)

Updates the name of a specific organisation. - Parameters: -  `organisationId`: The ID of the organisation to update. - Request Body (JSON): -  `name`: New name of the organisation.

 #### Request Body:
``` 
[
	{
		"name": "Twist Resources"
	}
]
```

 #### Actual Response:
``` 
[
	{
		"id":  6,
		"name": "Twist Resources"
	}
]
```

