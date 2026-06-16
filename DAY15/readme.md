# GET Method in Node.js & Express

## Complete Backend Engineering Guide

---

# Table of Contents

1. Introduction to HTTP
2. What is GET Method?
3. Why GET Exists
4. Evolution of GET
5. Client-Server Communication
6. Safe Operations
7. Idempotent Operations
8. Characteristics of GET
9. How Browsers Use GET
10. GET Request Lifecycle
11. Anatomy of a GET Request
12. Express GET Basics
13. Route Matching Internals
14. Route Parameters
15. Query Parameters
16. Route Params vs Query Params
17. Request Object Deep Dive
18. Response Object Deep Dive
19. Common GET Patterns
20. Best Practices

---

# Introduction to HTTP

HTTP stands for HyperText Transfer Protocol.

It is the communication language used between clients and servers.

Examples of clients:

- Browser
- Mobile App
- React Application
- Angular Application
- Vue Application
- Postman
- Curl

Examples of servers:

- Node.js
- Express.js
- Django
- Spring Boot
- ASP.NET
- Flask

Communication happens through requests and responses.

Client
↓
HTTP Request
↓
Server
↓
HTTP Response
↓
Client

Example:

Browser requests:

GET /products

Server responds:

{
"products":[]
}

Without HTTP:

- No websites
- No APIs
- No web applications
- No cloud services

Everything on the web depends on HTTP.

---

# HTTP Methods Overview

HTTP provides multiple methods.

| Method | Purpose        |
| ------ | -------------- |
| GET    | Read Data      |
| POST   | Create Data    |
| PUT    | Replace Data   |
| PATCH  | Partial Update |
| DELETE | Delete Data    |

CRUD Mapping

| CRUD   | HTTP      |
| ------ | --------- |
| Create | POST      |
| Read   | GET       |
| Update | PUT/PATCH |
| Delete | DELETE    |

GET is the Read operation.

---

# What is GET Method?

GET is an HTTP method used to retrieve information from a server.

Think of GET as asking a question.

Client:

"Can you give me this data?"

Server:

"Sure, here is the data."

Example:

GET /users

Meaning:

"Give me all users."

Example:

GET /products

Meaning:

"Give me all products."

Example:

GET /orders/123

Meaning:

"Give me order 123."

GET should never:

- Create data
- Update data
- Delete data

GET only retrieves data.

---

# Why GET Exists

Imagine Amazon.

When a customer opens Amazon:

Browser needs:

- Product details
- Categories
- Recommendations
- Reviews
- Prices

Browser sends multiple GET requests.

GET /products

GET /categories

GET /reviews

GET /recommendations

Server responds with data.

Without GET:

Amazon cannot show products.

Netflix cannot show movies.

Instagram cannot show posts.

LinkedIn cannot show jobs.

GET powers almost every screen users see.

---

# Evolution of GET

Early Internet:

Static HTML files.

Browser:

GET /index.html

Server:

Returns HTML file.

Modern Internet:

Browser:

GET /api/products

Server:

Returns JSON.

Example:

{
"id":1,
"name":"iPhone"
}

Today GET is heavily used for:

- APIs
- Microservices
- Mobile Apps
- SaaS Platforms
- Cloud Systems

---

# Client Server Communication

Step 1

Client sends request.

GET /users

↓

Step 2

Server receives request.

↓

Step 3

Server processes request.

↓

Step 4

Database queried.

↓

Step 5

Data returned.

↓

Step 6

Server sends response.

↓

Step 7

Client displays result.

---

# Safe Operations

GET is considered a Safe Method.

Safe means:

Request should not change server state.

Example:

Database Before

Users:

1
2
3

Request:

GET /users

Database After

Users:

1
2
3

Nothing changed.

Safe = Read Only

Examples of Safe Operations:

GET /products

GET /users

GET /posts

GET /comments

Examples of Unsafe Operations:

POST /users

PUT /users/1

DELETE /users/1

Because they modify data.

---

# Idempotent Operations

GET is also Idempotent.

Idempotent means:

Multiple identical requests produce same effect.

Example:

GET /products

Request 1

GET /products

Request 2

GET /products

Request 3

GET /products

Database state remains unchanged.

Result remains same.

Therefore GET is idempotent.

Mathematically:

# GET(X)

# GET(X)

GET(X)

Same effect every time.

---

# Characteristics of GET

GET has several important characteristics.

1. Read Only

Retrieves data.

2. Safe

Does not modify server state.

3. Idempotent

Repeated requests produce same effect.

4. Cacheable

Can be cached.

5. Bookmarkable

URLs can be bookmarked.

6. Search Engine Friendly

Search engines crawl GET URLs.

7. Visible in URL

Parameters appear in URL.

---

# How Browsers Use GET

Every time you:

- Open website
- Refresh page
- Click link
- Bookmark page
- Navigate through history

Browser usually sends GET.

Example:

User enters:

https://amazon.com

Browser sends:

GET /

Server returns:

HTML

Browser renders page.

---

# Browser Navigation Example

User clicks:

Products

Browser sends:

GET /products

↓

Server sends:

HTML

↓

Browser displays products

No JavaScript required.

This is how websites worked before modern frameworks.

---

# Modern SPA Example

React Application

User clicks Products.

React sends:

GET /api/products

Server returns:

{
"products":[]
}

React updates UI.

---

# Anatomy of a GET Request

Example:

GET /products?page=1&limit=10 HTTP/1.1

Host: api.example.com

Authorization: Bearer token

Let's break it down.

Method:

GET

Resource:

/products

Query Parameters:

page=1

limit=10

Headers:

Authorization

Host

User-Agent

Accept

---

# GET Request Lifecycle

User Clicks Button

↓

Browser Creates Request

↓

DNS Lookup

↓

TCP Connection

↓

HTTP GET Request Sent

↓

Load Balancer

↓

Express Server

↓

Middleware

↓

Route Handler

↓

Controller

↓

Database Query

↓

Controller Receives Data

↓

JSON Response Created

↓

Response Sent

↓

Browser Receives Data

↓

UI Updated

---

# Express GET Basics

Install Express

npm install express

Basic Example

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3000);
```

Request:

GET /

Response:

Home Page

---

# Understanding app.get()

Syntax

```javascript
app.get(path, callback);
```

Example

```javascript
app.get("/users", (req, res) => {
  res.send("Users");
});
```

Parameters

Path:

"/users"

Callback:

(req,res)=>{}

Express internally stores route definitions.

When request arrives:

GET /users

Express checks route table.

Match found.

Handler executes.

---

# Route Matching Internals

Express checks:

Method Match?

GET

AND

Path Match?

/users

If both match:

Execute callback.

Example:

```javascript
app.get("/users", handler);
```

Request:

GET /users

✓ Match

Request:

POST /users

✗ No Match

Request:

GET /products

✗ No Match

---

# Multiple GET Routes

```javascript
app.get("/", homeHandler);

app.get("/users", userHandler);

app.get("/products", productHandler);

app.get("/orders", orderHandler);
```

Express scans routes in order.

First matching route wins.

---

# Returning Data

Using send()

```javascript
app.get("/users", (req, res) => {
  res.send("Users Data");
});
```

Using json()

```javascript
app.get("/users", (req, res) => {
  res.json({
    success: true,
  });
});
```

Response:

{
"success": true
}

json() automatically:

- Converts object to JSON
- Sets Content-Type
- Sends response

---

# Request Object Deep Dive

Express provides req.

```javascript
app.get("/users", (req, res) => {});
```

req contains:

```javascript
req.params;
req.query;
req.body;
req.headers;
req.url;
req.method;
req.path;
req.hostname;
req.ip;
```

For GET requests:

Most commonly used:

```javascript
req.params;
req.query;
req.headers;
```

---

# Response Object Deep Dive

Response object controls outgoing response.

Common methods:

```javascript
res.send();
res.json();
res.status();
res.redirect();
res.download();
res.sendFile();
```

Example

```javascript
res.status(200).json({
  success: true,
});
```

---

# Common GET Patterns

Get all users

GET /users

Get one user

GET /users/10

Get user posts

GET /users/10/posts

Get product reviews

GET /products/100/reviews

Search products

GET /products?search=laptop

Filter products

GET /products?category=electronics

Sort products

GET /products?sort=price

Paginate products

GET /products?page=2&limit=20

---

# Best Practices

✓ Use nouns not verbs

Good

/users

/products

/orders

Bad

/getUsers

/fetchProducts

/loadOrders

✓ Keep URLs predictable

✓ Use status codes correctly

✓ Validate inputs

✓ Paginate large datasets

✓ Return JSON consistently

✓ Keep GET requests read-only

---

# End of Chunk 1

Next Chunk Covers:

- Route Parameters Deep Dive
- Query Parameters Deep Dive
- Filtering
- Searching
- Pagination
- Sorting
- Real Production APIs
- Status Codes
- REST Architecture

# Route Parameters Deep Dive

## What Are Route Parameters?

Route parameters are dynamic values embedded directly inside the URL path.

Example:

```http
GET /users/101
```

Here:

```text
101
```

is a route parameter.

Express Route:

```javascript
app.get("/users/:id", (req, res) => {
  console.log(req.params);
});
```

Output:

```javascript
{
  id: "101";
}
```

---

# Why Route Parameters Exist

Without route parameters:

```http
GET /user1
GET /user2
GET /user3
GET /user4
```

Millions of routes would be needed.

Instead:

```http
GET /users/:id
```

One route handles every user.

Examples:

```http
/users/1
/users/2
/users/500
/users/9999
```

All use same route.

---

# Route Parameter Flow

Request

```http
GET /users/50
```

↓

Express Route

```javascript
/users/:id
```

↓

req.params

```javascript
{
  id: "50";
}
```

↓

Database Query

```javascript
User.findById(50);
```

↓

Response

```json
{
  "id": 50,
  "name": "John"
}
```

---

# Multiple Route Parameters

Example:

```http
GET /users/5/orders/100
```

Express:

```javascript
app.get("/users/:userId/orders/:orderId", (req, res) => {
  console.log(req.params);
});
```

Output:

```javascript
{
  userId:"5",
  orderId:"100"
}
```

---

# Nested Resources

Real APIs frequently use nested resources.

Examples:

```http
/users/10/orders
```

Get orders belonging to user 10.

```http
/products/25/reviews
```

Get reviews for product 25.

```http
/movies/5/actors
```

Get actors in movie 5.

---

# Real World Examples

Amazon

```http
/products/12345
```

Netflix

```http
/movies/987
```

Instagram

```http
/posts/777
```

LinkedIn

```http
/jobs/1001
```

---

# Validating Route Parameters

Never trust incoming values.

Bad:

```javascript
const id = req.params.id;
```

User sends:

```http
/users/abc
```

Database may fail.

Better:

```javascript
const id = Number(req.params.id);

if (isNaN(id)) {
  return res.status(400).json({
    message: "Invalid User ID",
  });
}
```

---

# Query Parameters Deep Dive

## What Are Query Parameters?

Query parameters provide additional information to the server.

Structure:

```http
?
```

starts query string.

Example:

```http
/products?page=1
```

page=1 is query parameter.

---

# Query Parameter Syntax

Single Parameter

```http
/products?page=1
```

Multiple Parameters

```http
/products?page=1&limit=10
```

Many Parameters

```http
/products?page=1&limit=10&sort=price
```

---

# Accessing Query Parameters

Request:

```http
/products?page=2&limit=20
```

Express:

```javascript
app.get("/products", (req, res) => {
  console.log(req.query);
});
```

Output:

```javascript
{
  page:"2",
  limit:"20"
}
```

Important:

Everything arrives as string.

---

# Why Query Parameters Exist

Route Parameters identify resources.

Query Parameters modify results.

Example:

```http
/users/5
```

Identify User 5.

Example:

```http
/users?page=5
```

Modify user list output.

---

# Route Params vs Query Params

Route Params

```http
/users/5
```

Meaning:

Get user 5.

Query Params

```http
/users?page=5
```

Meaning:

Get page 5.

---

| Feature  | Route Param       | Query Param      |
| -------- | ----------------- | ---------------- |
| Purpose  | Identify Resource | Modify Result    |
| Required | Usually Yes       | Usually Optional |
| Example  | /users/5          | /users?page=5    |

---

# Filtering

## What Is Filtering?

Filtering means returning only matching data.

Database:

```text
Laptop
Mobile
TV
Tablet
```

Request:

```http
GET /products?category=laptop
```

Response:

```text
Laptop
```

Only matching records returned.

---

# Filtering Flow

Client

```http
GET /products?category=laptop
```

↓

Express

```javascript
const category = req.query.category;
```

↓

Database

```sql
SELECT *
FROM products
WHERE category='laptop'
```

↓

Response

Filtered data.

---

# Single Filter Example

```javascript
app.get("/products", (req, res) => {
  const category = req.query.category;
});
```

Request:

```http
/products?category=electronics
```

Output:

```javascript
electronics;
```

---

# Multiple Filters

Request:

```http
/products?
category=laptop
&brand=dell
```

Express:

```javascript
const { category, brand } = req.query;
```

MongoDB:

```javascript
{
 category:"laptop",
 brand:"dell"
}
```

SQL:

```sql
SELECT *
FROM products
WHERE category='laptop'
AND brand='dell';
```

---

# Searching

## What Is Searching?

Filtering looks for exact values.

Searching looks for partial matches.

Example:

Database

```text
iPhone 15
iPhone 16
Samsung S25
```

Request:

```http
/products?search=iphone
```

Response:

```text
iPhone 15
iPhone 16
```

---

# Search Flow

Request

```http
/products?search=iphone
```

↓

Express

```javascript
const search = req.query.search;
```

↓

Database Search

↓

Matching Results

↓

Response

---

# MongoDB Search Example

```javascript
const search = req.query.search || "";

const products = await Product.find({
  name: {
    $regex: search,
    $options: "i",
  },
});
```

Explanation:

```javascript
$regex;
```

Pattern matching.

```javascript
i;
```

Case insensitive.

Matches:

```text
iphone
IPHONE
iPhone
Iphone
```

---

# SQL Search Example

```sql
SELECT *
FROM products
WHERE name LIKE '%iphone%';
```

---

# Filtering + Searching Together

Request:

```http
/products?
category=mobile
&search=iphone
```

MongoDB:

```javascript
{
 category:"mobile",
 name:{
   $regex:"iphone",
   $options:"i"
 }
}
```

Result:

Only iPhones inside mobile category.

---

# Pagination

## Why Pagination Exists

Imagine:

10 Users

No problem.

Imagine:

10 Million Users

Huge problem.

Request:

```http
GET /users
```

Server may:

- Consume memory
- Slow response
- Crash

Pagination solves this.

---

# Pagination Concepts

Page

Current chunk.

Limit

Items per page.

Skip

How many records ignored.

Formula

```javascript
skip = (page - 1) * limit;
```

---

# Pagination Example

Request:

```http
/products?page=1&limit=10
```

Page 1:

```text
1-10
```

Request:

```http
/products?page=2&limit=10
```

Page 2:

```text
11-20
```

---

# Pagination Implementation

```javascript
const page = Number(req.query.page) || 1;

const limit = Number(req.query.limit) || 10;

const skip = (page - 1) * limit;
```

MongoDB

```javascript
Product.find().skip(skip).limit(limit);
```

---

# Pagination Response Format

Professional APIs return metadata.

```json
{
  "page": 2,
  "limit": 10,
  "totalPages": 20,
  "totalRecords": 200,
  "data": []
}
```

---

# Benefits of Pagination

✓ Faster Response

✓ Lower Memory Usage

✓ Better User Experience

✓ Reduced Database Load

✓ Scalable APIs

---

# Sorting

## What Is Sorting?

Sorting arranges data.

Examples:

- Price Low → High
- Price High → Low
- Newest First
- Oldest First
- Rating Highest First

---

# Sorting Request

```http
/products?sort=price
```

Ascending Order.

---

# Descending Sorting

```http
/products?sort=-price
```

Meaning:

Highest price first.

---

# MongoDB Sorting

Ascending

```javascript
.sort({
   price:1
})
```

Descending

```javascript
.sort({
   price:-1
})
```

---

# SQL Sorting

Ascending

```sql
ORDER BY price ASC
```

Descending

```sql
ORDER BY price DESC
```

---

# Combining Everything

Real Request

```http
GET /products?
category=laptop
&search=dell
&page=2
&limit=10
&sort=price
```

Features Used:

✓ Filtering

✓ Searching

✓ Pagination

✓ Sorting

Single GET request performing multiple operations.

---

# Advanced Production Example

```javascript
app.get("/products", async (req, res) => {
  const page = Number(req.query.page) || 1;

  const limit = Number(req.query.limit) || 10;

  const skip = (page - 1) * limit;

  const search = req.query.search || "";

  const category = req.query.category;

  let filter = {};

  if (category) {
    filter.category = category;
  }

  filter.name = {
    $regex: search,
    $options: "i",
  };

  const products = await Product.find(filter).skip(skip).limit(limit).sort({
    createdAt: -1,
  });

  res.status(200).json(products);
});
```

---

# End of Chunk 2

Next Chunk Covers:

- Status Codes Deep Dive
- REST API Principles
- Security Concerns
- Caching
- Performance Optimization
- Amazon Architecture
- Netflix Architecture
- LinkedIn API Design
- Instagram Feed APIs
- Production Grade Enterprise GET Endpoints
- Interview Questions
- System Design Perspective

# Status Codes Deep Dive

HTTP status codes tell the client what happened.

Think of them as the server's final answer.

Request

↓

Server Processes

↓

Status Code Returned

↓

Client Understands Result

---

# Status Code Categories

| Range | Meaning       |
| ----- | ------------- |
| 1xx   | Informational |
| 2xx   | Success       |
| 3xx   | Redirection   |
| 4xx   | Client Error  |
| 5xx   | Server Error  |

---

# 200 OK

Most common GET response.

Meaning:

Request successful.

Example:

```javascript
res.status(200).json(users);
```

Response:

```json
{
  "success": true,
  "data": []
}
```

---

# 204 No Content

Request successful.

No response body.

Example:

```javascript
res.status(204).send();
```

Used rarely.

---

# 304 Not Modified

Used with caching.

Browser asks:

"Has data changed?"

Server:

"No."

Browser uses cache.

Result:

Faster response.

Lower bandwidth.

---

# 400 Bad Request

Client sent invalid data.

Example:

```http
GET /users/abc
```

When numeric ID expected.

Response:

```javascript
res.status(400).json({
  message: "Invalid User ID",
});
```

---

# 401 Unauthorized

Authentication missing.

Example:

```http
GET /profile
```

Without token.

Response:

```javascript
res.status(401).json({
  message: "Unauthorized",
});
```

---

# 403 Forbidden

User authenticated.

But lacks permission.

Example:

Employee attempting admin endpoint.

Response:

```javascript
res.status(403).json({
  message: "Forbidden",
});
```

---

# 404 Not Found

Resource does not exist.

Example:

```http
GET /users/99999
```

Response:

```javascript
res.status(404).json({
  message: "User Not Found",
});
```

---

# 429 Too Many Requests

Rate limit exceeded.

Example:

1000 requests in one minute.

Response:

```javascript
res.status(429).json({
  message: "Too Many Requests",
});
```

---

# 500 Internal Server Error

Unexpected server failure.

Example:

Database connection lost.

Response:

```javascript
res.status(500).json({
  message: "Internal Server Error",
});
```

---

# REST Principles

REST

Representational State Transfer

Created by:

Roy Fielding

REST is an architectural style.

Most modern APIs follow REST principles.

---

# REST Resource Design

Bad

```http
/getUsers
/fetchProducts
/loadOrders
```

Good

```http
/users
/products
/orders
```

Resources should be nouns.

Not verbs.

---

# REST GET Examples

Get all users

```http
GET /users
```

Get single user

```http
GET /users/10
```

Get user orders

```http
GET /users/10/orders
```

Get product reviews

```http
GET /products/100/reviews
```

---

# REST Resource Hierarchy

```text
Users
 └── Orders
       └── Items
```

Endpoints

```http
/users
/users/1
/users/1/orders
/users/1/orders/5
/users/1/orders/5/items
```

---

# RESTful URL Design

Bad

```http
GET /getUserById/10
```

Good

```http
GET /users/10
```

---

# Security Concerns

Senior engineers spend significant time here.

---

# Never Trust User Input

Bad

```javascript
const page = req.query.page;
```

User sends:

```http
?page=-999999
```

Unexpected behavior.

Validate:

```javascript
const page = Math.max(Number(req.query.page) || 1, 1);
```

---

# Limit Abuse Protection

Bad

```http
?limit=999999999
```

Server may crash.

Good

```javascript
const limit = Math.min(Number(req.query.limit) || 10, 100);
```

---

# SQL Injection

Dangerous:

```javascript
const query = `SELECT * FROM users
WHERE id=${req.params.id}`;
```

User:

```http
/users/1 OR 1=1
```

Potential attack.

Use parameterized queries.

```javascript
db.query("SELECT * FROM users WHERE id=?", [id]);
```

---

# MongoDB Injection

Bad

```javascript
User.find(req.query);
```

User controls query.

Dangerous.

Always whitelist fields.

---

# Sensitive Data Exposure

Bad

```json
{
  "id": 1,
  "email": "abc@gmail.com",
  "password": "hashedpassword"
}
```

Never expose:

- Passwords
- Secrets
- Internal IDs
- Tokens

Good

```json
{
  "id": 1,
  "name": "John"
}
```

---

# IDOR Vulnerability

Insecure Direct Object Reference.

Example:

```http
/users/100/profile
```

User changes URL:

```http
/users/101/profile
```

And accesses another user's data.

Always verify ownership.

```javascript
if (user.id !== profile.ownerId) {
  return res.status(403).json({});
}
```

---

# Rate Limiting

Prevent abuse.

Example:

100 requests/minute.

Express Middleware:

```javascript
const rateLimit = require("express-rate-limit");

app.use(
  rateLimit({
    windowMs: 60000,
    max: 100,
  }),
);
```

---

# Authentication

Public Endpoint

```http
GET /products
```

Protected Endpoint

```http
GET /profile
```

Protected routes require:

```http
Authorization: Bearer TOKEN
```

---

# Performance Optimization

Large companies optimize GET aggressively.

Why?

GET is usually:

80%-95%

of total traffic.

---

# Database Indexing

Without Index

```text
1 Million Records
```

Database scans everything.

Slow.

With Index

```javascript
db.users.createIndex({
  email: 1,
});
```

Database jumps directly.

Fast.

---

# Index Example

Query:

```javascript
User.find({
  email: "abc@gmail.com",
});
```

Index:

```javascript
{
  email: 1;
}
```

Massive speed improvement.

---

# Pagination Optimization

Bad

```javascript
User.find();
```

Returns millions of records.

Good

```javascript
User.find().limit(20);
```

---

# Projection

Return only required fields.

Bad

```javascript
User.find();
```

Returns everything.

Good

```javascript
User.find().select("name email");
```

Smaller response.

Faster API.

---

# Compression

Large JSON responses consume bandwidth.

Use:

```javascript
const compression = require("compression");

app.use(compression());
```

Response compressed.

Smaller payload.

---

# Caching

Most powerful GET optimization.

---

# Browser Cache

Browser stores response.

Next request:

No server call.

Instant response.

---

# CDN Cache

Example:

Cloudflare

User

↓

CDN

↓

Origin Server

Static GET requests served directly.

---

# Redis Cache

Flow

```text
Client
  ↓
Redis
  ↓
Database
```

If data exists in Redis:

Database skipped.

Huge performance gain.

---

# Redis Example

```javascript
const cached = await redis.get(key);

if (cached) {
  return res.json(JSON.parse(cached));
}
```

---

# ETag

Server sends:

```http
ETag: abc123
```

Browser stores it.

Next request:

```http
If-None-Match: abc123
```

Server:

```http
304 Not Modified
```

No payload transferred.

---

# Cache-Control Header

Example:

```javascript
res.set("Cache-Control", "public,max-age=3600");
```

Meaning:

Cache for 1 hour.

---

# GET Performance Checklist

✓ Database Indexes

✓ Pagination

✓ Projection

✓ Compression

✓ Redis

✓ CDN

✓ ETag

✓ Query Optimization

✓ Connection Pooling

✓ Rate Limiting

---

# Common Mistakes

Mistake #1

Using GET to create data.

Wrong

```http
GET /createUser
```

Correct

```http
POST /users
```

---

Mistake #2

Using GET to update data.

Wrong

```http
GET /updateProfile
```

Correct

```http
PATCH /profile
```

---

Mistake #3

Passwords in URL.

Wrong

```http
/login?password=123
```

URLs appear in logs.

Never do this.

---

Mistake #4

Returning entire database.

Wrong

```http
GET /users
```

Millions of records.

Always paginate.

---

Mistake #5

Ignoring validation.

Validate:

- page
- limit
- ids
- sort fields

Always.

---

# End Chunk 3

Next Chunk:

- Amazon API Design
- Netflix API Design
- LinkedIn API Design
- Instagram Feed APIs
- Enterprise GET Architecture
- Production Grade GET Endpoint
- Monitoring & Logging
- Microservices GET Flow
- 50+ Interview Questions & Answers

````



# POST Method in Node.js & Express
## Complete Backend Engineering Guide

---

# Table of Contents

1. What is POST?
2. Why POST Exists
3. Resource Creation
4. Request Body Processing
5. express.json()
6. Request Lifecycle
7. Validation Strategies
8. Data Transformation
9. Duplicate Checking
10. Unique Constraints
11. Server Generated IDs
12. Business Rules
13. Database Integration Concepts
14. Status Codes
15. Security Concerns
16. Common Mistakes
17. Real World Examples
18. Production Grade POST Endpoint
19. Large Scale System Best Practices
20. Interview Questions

---

# What is POST?

POST is an HTTP method used to send data from a client to a server.

Unlike GET:

GET retrieves data.

POST creates data.

Example:

```http
POST /users
````

Meaning:

Create a new user.

---

# Why POST Exists

Imagine Amazon.

Customer places an order.

Before:

```text
Orders = 1000
```

After:

```text
Orders = 1001
```

Something changed.

GET cannot do this.

POST exists because applications need to:

- Register users
- Create orders
- Create payments
- Upload files
- Submit forms
- Create products
- Create reviews

POST creates new resources.

---

# Resource Creation

Most common use case.

Request:

```http
POST /users
```

Body:

```json
{
  "name": "John",
  "email": "john@gmail.com"
}
```

Response:

```json
{
  "id": 101,
  "name": "John",
  "email": "john@gmail.com"
}
```

A new resource now exists.

---

# POST vs GET

| Feature      | GET     | POST |
| ------------ | ------- | ---- |
| Read Data    | Yes     | No   |
| Create Data  | No      | Yes  |
| Request Body | Rare    | Yes  |
| Cacheable    | Usually | Rare |
| Safe         | Yes     | No   |
| Idempotent   | Yes     | No   |

---

# Why POST Is Not Safe

POST changes server state.

Before:

```text
Users = 10
```

Request:

```http
POST /users
```

After:

```text
Users = 11
```

Database changed.

Therefore POST is not safe.

---

# Why POST Is Not Idempotent

Request 1:

```http
POST /users
```

Creates:

```text
User #101
```

Request 2:

```http
POST /users
```

Creates:

```text
User #102
```

Two different users.

POST is not idempotent.

---

# Request Body Processing

GET typically uses:

```javascript
req.query;
```

POST typically uses:

```javascript
req.body;
```

Example:

```http
POST /users
```

Body:

```json
{
  "name": "John"
}
```

Access:

```javascript
req.body.name;
```

---

# Anatomy of POST Request

```http
POST /users HTTP/1.1

Content-Type: application/json

{
  "name":"John",
  "email":"john@gmail.com"
}
```

Components:

Method

```text
POST
```

Path

```text
/users
```

Headers

```text
Content-Type
Authorization
```

Body

```json
{}
```

---

# express.json()

Express cannot automatically read JSON.

Need middleware.

```javascript
app.use(express.json());
```

Without it:

```javascript
req.body;
```

returns:

```javascript
undefined;
```

---

# How express.json() Works

Request:

```json
{
  "name": "John"
}
```

↓

Raw bytes arrive

↓

express.json()

↓

Parse JSON

↓

Attach to req.body

↓

Controller accesses data

---

# Basic POST Example

```javascript
const express = require("express");

const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);

  res.json({
    success: true,
  });
});
```

Request:

```json
{
  "name": "John"
}
```

Output:

```javascript
{
  name: "John";
}
```

---

# POST Request Lifecycle

Client

↓

POST Request

↓

Load Balancer

↓

Express Server

↓

Middleware

↓

express.json()

↓

Validation

↓

Business Rules

↓

Database Query

↓

Database Insert

↓

Response

↓

Client

---

# Validation Strategies

Never trust client input.

Bad:

```javascript
User.create(req.body);
```

Dangerous.

Validate first.

---

# Required Field Validation

```javascript
const { name, email } = req.body;

if (!name) {
  return res.status(400).json({
    message: "Name required",
  });
}
```

---

# Email Validation

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

Example:

```javascript
if (!emailRegex.test(email)) {
  return res.status(400).json({
    message: "Invalid Email",
  });
}
```

---

# Validation Libraries

Production APIs use:

- Joi
- Zod
- Yup
- Express Validator

Example:

```javascript
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  email: z.email(),
});
```

---

# Data Transformation

Clients send messy data.

Input:

```json
{
  "name": "   JOHN   ",
  "email": "JOHN@GMAIL.COM"
}
```

Transform:

```javascript
const name = req.body.name.trim();

const email = req.body.email.toLowerCase().trim();
```

Result:

```json
{
  "name": "JOHN",
  "email": "john@gmail.com"
}
```

---

# Duplicate Checking

Common production requirement.

Before creating user:

Check if email exists.

```javascript
const existingUser = await User.findOne({
  email,
});
```

If exists:

```javascript
return res.status(409).json({
  message: "Email Exists",
});
```

---

# Why Duplicate Checking Matters

Without check:

```text
john@gmail.com
john@gmail.com
john@gmail.com
```

Database polluted.

Users confused.

Business logic broken.

---

# Unique Constraints

Application checks are not enough.

Database must enforce uniqueness.

MongoDB:

```javascript
email:{
   type:String,
   unique:true
}
```

SQL:

```sql
ALTER TABLE users
ADD CONSTRAINT unique_email
UNIQUE(email);
```

---

# Why Database Constraints Matter

Imagine:

Request A

↓

Check Email

↓

Not Found

Request B

↓

Check Email

↓

Not Found

Both insert simultaneously.

Only DB constraints guarantee uniqueness.

---

# Server Generated IDs

Never trust client IDs.

Bad:

```json
{
  "id": 1,
  "name": "John"
}
```

User controls ID.

Dangerous.

Server generates IDs.

MongoDB:

```javascript
_id;
```

SQL:

```sql
AUTO_INCREMENT
```

UUID:

```javascript
crypto.randomUUID();
```

---

# Business Rules

Validation checks format.

Business rules check logic.

Examples:

User must be 18+

Order amount > 0

Inventory available

Coupon not expired

Payment not duplicated

---

# Business Rule Example

```javascript
if (age < 18) {
  return res.status(400).json({
    message: "Must be adult",
  });
}
```

---

# Database Integration Concepts

POST almost always writes data.

Flow:

```text
Client
  ↓
API
  ↓
Validation
  ↓
Database
  ↓
Response
```

---

# MongoDB Example

```javascript
const user = await User.create({
  name,
  email,
});
```

---

# SQL Example

```sql
INSERT INTO users
(name,email)
VALUES
('John','john@gmail.com');
```

---

# Status Codes

## 201 Created

Most important POST response.

```javascript
res.status(201).json(user);
```

Meaning:

Resource created successfully.

---

## 400 Bad Request

Validation failed.

```javascript
res.status(400).json({
  message: "Invalid Input",
});
```

---

## 401 Unauthorized

Missing authentication.

---

## 403 Forbidden

No permission.

---

## 404 Not Found

Parent resource missing.

Example:

```http
POST /orders/customer/999
```

Customer does not exist.

---

## 409 Conflict

Duplicate resource.

Example:

```text
Email already exists
```

```javascript
res.status(409).json({
  message: "Email Exists",
});
```

---

## 500 Internal Server Error

Unexpected failure.

```javascript
res.status(500).json({
  message: "Server Error",
});
```

---

# Security Concerns

POST endpoints are primary attack targets.

---

# Never Trust req.body

Bad:

```javascript
User.create(req.body);
```

Users control everything.

Always validate.

---

# Mass Assignment Vulnerability

Request:

```json
{
  "name": "John",
  "role": "admin"
}
```

Dangerous.

Whitelist fields.

```javascript
const user = {
  name: req.body.name,
  email: req.body.email,
};
```

---

# Password Hashing

Never store plain passwords.

Bad:

```javascript
password: "123456";
```

Good:

```javascript
const hash = await bcrypt.hash(password, 10);
```

---

# SQL Injection

Use parameterized queries.

Never string concatenate.

---

# Rate Limiting

Prevent spam.

```javascript
max: 100;
```

requests per minute.

---

# Request Size Limits

Prevent huge payloads.

```javascript
app.use(
  express.json({
    limit: "1mb",
  }),
);
```

---

# Common Mistakes

Mistake #1

Missing express.json()

```javascript
req.body;
```

becomes undefined.

---

Mistake #2

Returning 200 instead of 201.

Created resources should return:

```http
201 Created
```

---

Mistake #3

Not validating input.

---

Mistake #4

Trusting client IDs.

---

Mistake #5

No duplicate checks.

---

Mistake #6

No unique constraints.

---

Mistake #7

Returning passwords.

Never return:

```json
{
  "password": "..."
}
```

---

# Real World Registration Flow

Instagram Registration

```text
POST /users/register
```

Body:

```json
{
  "username": "john",
  "email": "john@gmail.com",
  "password": "secret"
}
```

Flow:

Validate

↓

Transform

↓

Check Duplicate

↓

Hash Password

↓

Save User

↓

Generate JWT

↓

Return User

---

# Real World Order Creation

Amazon

```http
POST /orders
```

Flow:

Validate Cart

↓

Check Inventory

↓

Calculate Price

↓

Reserve Inventory

↓

Create Order

↓

Return Order

---

# Real World Payment Flow

Stripe Style

```http
POST /payments
```

Flow:

Validate Payment

↓

Fraud Check

↓

Gateway Call

↓

Store Transaction

↓

Return Payment Status

---

# Production Grade POST Endpoint

```javascript
app.post("/users", async (req, res) => {
  try {
    const name = req.body.name?.trim();

    const email = req.body.email?.toLowerCase()?.trim();

    if (!name || !email) {
      return res.status(400).json({
        message: "Name and Email required",
      });
    }

    const existing = await User.findOne({
      email,
    });

    if (existing) {
      return res.status(409).json({
        message: "Email Exists",
      });
    }

    const user = await User.create({
      name,
      email,
    });

    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
```

---

# Best Practices Used In Large Scale Systems

✓ Validate Everything

✓ Use DTOs

✓ Transform Input

✓ Hash Passwords

✓ Unique Constraints

✓ Return 201 Created

✓ Use Transactions

✓ Log Requests

✓ Monitor Failures

✓ Apply Rate Limiting

✓ Use Idempotency Keys For Payments

✓ Audit Sensitive Actions

✓ Keep Controllers Thin

✓ Move Logic To Services

✓ Use Database Constraints

✓ Implement Retry Logic

✓ Use Distributed Tracing

✓ Centralized Error Handling

---

# Interview Questions

Q1. Why does POST exist?

Answer:

To create resources and send data to server.

---

Q2. Why is POST not idempotent?

Because multiple requests may create multiple resources.

---

Q3. Why use express.json()?

To parse JSON request bodies.

---

Q4. Difference between GET and POST?

GET reads.

POST creates.

---

Q5. Why return 201?

Resource created successfully.

---

Q6. Why use unique constraints?

Prevent duplicates at database level.

---

Q7. Why validate input?

Prevent invalid or malicious data.

---

Q8. Why hash passwords?

Protect user credentials.

---

Q9. What is mass assignment?

Attacker injects unexpected fields into request body.

---

Q10. What status code for duplicate email?

```http
409 Conflict
```

---

# Senior Backend Engineer Summary

POST is:

✓ Resource Creation Method

✓ Not Safe

✓ Not Idempotent

✓ Uses Request Body

✓ Requires Validation

✓ Requires Security Controls

✓ Usually Writes To Database

✓ Returns 201 Created

✓ Foundation Of Registration, Orders And Payments

Mastering POST is essential for building production-grade APIs.

# PUT Method in Node.js & Express

## Complete Backend Engineering Guide

---

# Table of Contents

1. What is PUT?
2. Why PUT Exists
3. Full Resource Replacement
4. PUT vs POST
5. PUT vs PATCH
6. Idempotency
7. Request Lifecycle
8. Request Body Processing
9. Validation Strategies
10. Updating Resources
11. Duplicate Checking
12. Business Logic Validation
13. Status Codes
14. Real-World Profile Update Systems
15. Common Mistakes
16. Edge Cases
17. Security Considerations
18. Production Grade PUT Endpoint
19. Large Scale System Best Practices
20. Interview Questions

---

# What is PUT?

PUT is an HTTP method used to completely replace an existing resource.

Think of PUT as:

```text
Take this new version
and replace the old version.
```

Example:

Current User

```json
{
  "id": 1,
  "name": "John",
  "email": "john@gmail.com"
}
```

Request

```http
PUT /users/1
```

Body

```json
{
  "name": "John Smith",
  "email": "johnsmith@gmail.com"
}
```

After Update

```json
{
  "id": 1,
  "name": "John Smith",
  "email": "johnsmith@gmail.com"
}
```

Entire resource replaced.

---

# Why PUT Exists

Applications frequently need updates.

Examples:

- Update profile
- Update product
- Update order status
- Update address
- Update company information
- Update subscription

Without PUT:

Users could create data but never modify it.

PUT exists to replace existing resources.

---

# Full Resource Replacement

This is the most important PUT concept.

PUT expects the entire resource representation.

Existing User

```json
{
  "id": 1,
  "name": "John",
  "email": "john@gmail.com",
  "city": "Hyderabad"
}
```

PUT Request

```json
{
  "name": "Alex",
  "email": "alex@gmail.com"
}
```

Potential Result

```json
{
  "id": 1,
  "name": "Alex",
  "email": "alex@gmail.com"
}
```

city may disappear because PUT replaces the entire resource.

---

# PUT Mental Model

Imagine a document.

Old Document

```text
Page A
```

PUT

```text
Replace Page A with Page B
```

Old content removed.

New content becomes source of truth.

---

# PUT vs POST

POST

Creates new resource.

```http
POST /users
```

PUT

Updates existing resource.

```http
PUT /users/1
```

Comparison

| Feature                | POST    | PUT |
| ---------------------- | ------- | --- |
| Create Resource        | Yes     | No  |
| Update Resource        | No      | Yes |
| Idempotent             | No      | Yes |
| Full Replacement       | No      | Yes |
| Generates New Resource | Usually | No  |

---

# PUT vs PATCH

Most interviewers ask this.

PUT

Full replacement.

PATCH

Partial update.

PUT Example

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "city": "Hyderabad"
}
```

PATCH Example

```json
{
  "city": "Mumbai"
}
```

PATCH changes only provided fields.

PUT replaces resource representation.

---

# PUT Idempotency

PUT is idempotent.

This is extremely important.

---

# What Is Idempotency?

Same request.

Repeated many times.

Produces same result.

Example

Request 1

```http
PUT /users/1
```

Body

```json
{
  "name": "Alex"
}
```

Database

```json
{
  "name": "Alex"
}
```

Request 2

Same request.

Database remains:

```json
{
  "name": "Alex"
}
```

No additional effect.

Therefore PUT is idempotent.

---

# Why PUT Is Idempotent

POST

Creates multiple resources.

PUT

Sets resource to a specific state.

Think:

```text
SET VALUE = 10
```

Running it 100 times still results in:

```text
10
```

---

# Request Lifecycle

Client

↓

PUT Request

↓

Load Balancer

↓

Express Server

↓

Authentication

↓

Authorization

↓

Validation

↓

Business Rules

↓

Database Lookup

↓

Duplicate Checks

↓

Update Operation

↓

Response

↓

Client

---

# Basic PUT Route

```javascript
app.put("/users/:id", (req, res) => {
  res.json({
    success: true,
  });
});
```

---

# Reading Parameters

Route

```javascript
app.put("/users/:id");
```

Request

```http
PUT /users/5
```

Access

```javascript
req.params.id;
```

Output

```javascript
5;
```

---

# Reading Request Body

```javascript
app.use(express.json());
```

Request

```json
{
  "name": "Alex"
}
```

Access

```javascript
req.body.name;
```

---

# Validation Strategies

Never trust client input.

Bad

```javascript
User.updateOne(req.body);
```

Good

Validate first.

---

# Required Fields

```javascript
const { name, email } = req.body;

if (!name || !email) {
  return res.status(400).json({
    message: "Required Fields Missing",
  });
}
```

---

# Type Validation

```javascript
if (typeof name !== "string") {
  return res.status(400).json({
    message: "Invalid Name",
  });
}
```

---

# Email Validation

```javascript
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

Check

```javascript
if (!regex.test(email)) {
  return res.status(400).json({
    message: "Invalid Email",
  });
}
```

---

# Schema Validation

Production systems use:

- Joi
- Zod
- Yup
- Express Validator

Example

```javascript
const schema = z.object({
  name: z.string(),
  email: z.email(),
});
```

---

# Updating Resources

Typical Flow

Step 1

Find Resource

```javascript
const user = await User.findById(id);
```

Step 2

Validate Existence

```javascript
if (!user) {
  return res.status(404).json({});
}
```

Step 3

Update Resource

```javascript
user.name = name;
user.email = email;
```

Step 4

Save

```javascript
await user.save();
```

---

# Duplicate Checking

Example:

Updating email.

Current

```text
john@gmail.com
alex@gmail.com
```

User wants:

```text
alex@gmail.com
```

Need duplicate check.

---

# Duplicate Validation

```javascript
const existing = await User.findOne({
  email,
});
```

If exists:

```javascript
return res.status(409).json({
  message: "Email Exists",
});
```

---

# Smart Duplicate Check

Avoid detecting current record.

```javascript
const existing = await User.findOne({
  email,
  _id: {
    $ne: id,
  },
});
```

Meaning:

Find email.

But not current user.

---

# Business Logic Validation

Validation checks format.

Business rules check meaning.

Examples:

- Username cannot change twice per day
- Profile cannot be updated if account suspended
- Email must be verified
- Subscription must be active

---

# Example Business Rule

```javascript
if (user.status === "SUSPENDED") {
  return res.status(403).json({
    message: "Account Suspended",
  });
}
```

---

# Status Codes

## 200 OK

Successful update.

```javascript
res.status(200).json(user);
```

---

## 204 No Content

Update successful.

No body returned.

```javascript
res.status(204).send();
```

---

## 400 Bad Request

Validation failure.

```javascript
res.status(400).json({
  message: "Invalid Input",
});
```

---

## 401 Unauthorized

Missing authentication.

---

## 403 Forbidden

No permission.

---

## 404 Not Found

Resource missing.

```javascript
res.status(404).json({
  message: "User Not Found",
});
```

---

## 409 Conflict

Duplicate email.

```javascript
res.status(409).json({
  message: "Email Exists",
});
```

---

## 500 Internal Server Error

Unexpected failure.

---

# Real World Profile Update Flow

LinkedIn Profile Update

```http
PUT /profile
```

Flow

Authenticate User

↓

Validate Input

↓

Check Duplicate Username

↓

Apply Business Rules

↓

Update Database

↓

Clear Cache

↓

Publish Event

↓

Return Updated Profile

---

# Instagram Profile Update

```http
PUT /users/profile
```

Update

- Name
- Bio
- Website
- Avatar

After Update

Cache invalidated.

Followers see latest profile.

---

# Amazon Address Update

```http
PUT /addresses/123
```

Flow

Validate Address

↓

Verify Ownership

↓

Update Address

↓

Mark Shipping Cache Dirty

↓

Return Updated Resource

---

# Edge Cases

## Updating Nonexistent Resource

Request

```http
PUT /users/999
```

User does not exist.

Response

```http
404 Not Found
```

---

# Empty Body

Request

```json
{}
```

Response

```http
400 Bad Request
```

---

# Duplicate Email

Request

```json
{
  "email": "existing@gmail.com"
}
```

Response

```http
409 Conflict
```

---

# Concurrent Updates

Two requests arrive.

Request A

↓

Update Email

Request B

↓

Update Email

Potential race condition.

Solutions:

- Transactions
- Optimistic Locking
- Version Fields

---

# Security Considerations

---

# Authentication

Never allow anonymous updates.

```http
Authorization: Bearer TOKEN
```

Required.

---

# Authorization

User A must not update User B.

Bad

```http
PUT /users/100
```

Without ownership checks.

Good

```javascript
if (req.user.id !== user.id) {
  return res.status(403).json({});
}
```

---

# Mass Assignment Vulnerability

Dangerous

```json
{
  "name": "John",
  "role": "admin"
}
```

Bad

```javascript
user = req.body;
```

Good

```javascript
user.name = req.body.name;
```

Whitelist fields.

---

# Input Sanitization

Prevent XSS.

Input

```html
<script>
  alert(1);
</script>
```

Sanitize before storing.

---

# Audit Logging

Store update history.

```text
User Updated Email

Old:
john@gmail.com

New:
alex@gmail.com
```

Critical for compliance.

---

# Production Grade PUT Endpoint

```javascript
app.put("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Name and Email Required",
      });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    const existing = await User.findOne({
      email,
      _id: {
        $ne: id,
      },
    });

    if (existing) {
      return res.status(409).json({
        message: "Email Exists",
      });
    }

    user.name = name.trim();

    user.email = email.toLowerCase().trim();

    await user.save();

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
```

---

# Best Practices Used In Large Scale Systems

✓ Authenticate Every Request

✓ Authorize Ownership

✓ Validate Everything

✓ Use DTOs

✓ Use Schema Validation

✓ Check Duplicates

✓ Log Changes

✓ Audit Sensitive Updates

✓ Use Transactions

✓ Use Optimistic Locking

✓ Publish Domain Events

✓ Clear Cache After Updates

✓ Sanitize Input

✓ Monitor Update Failures

✓ Keep Controllers Thin

✓ Move Logic To Services

✓ Return Consistent Responses

---

# Interview Questions

Q1. Why does PUT exist?

Answer:

To completely replace an existing resource.

---

Q2. Is PUT idempotent?

Yes.

Same request produces same final state.

---

Q3. Difference between PUT and POST?

POST creates.

PUT replaces.

---

Q4. Difference between PUT and PATCH?

PUT replaces full resource.

PATCH updates partial fields.

---

Q5. Why check duplicates during update?

To prevent conflicting unique values.

---

Q6. What status code for successful update?

```http
200 OK
```

or

```http
204 No Content
```

---

Q7. What status code for duplicate email?

```http
409 Conflict
```

---

Q8. Why is PUT idempotent?

Because repeated requests result in the same resource state.

---

Q9. Why use validation?

To prevent invalid data entering the system.

---

Q10. Biggest PUT security risk?

Unauthorized updates and mass assignment vulnerabilities.

---

# Senior Backend Engineer Summary

PUT is:

✓ Update Method

✓ Full Resource Replacement

✓ Idempotent

✓ Uses Request Body

✓ Requires Validation

✓ Requires Authorization

✓ Common For Profile Updates

✓ Requires Duplicate Checks

✓ Requires Business Rule Validation

✓ Returns 200 or 204

Mastering PUT is essential for building production-grade update APIs in modern backend systems.

# PATCH Method in Node.js & Express

## Complete Backend Engineering Guide

---

# Table of Contents

1. What is PATCH?
2. Why PATCH Exists
3. Partial Updates
4. PATCH vs PUT
5. PATCH vs POST
6. Resource Modification
7. Field-Level Updates
8. Object.assign()
9. Request Lifecycle
10. Validation Strategies
11. Production Update Flows
12. Profile Update Scenarios
13. Settings Update Scenarios
14. Security Concerns
15. Common Mistakes
16. Edge Cases
17. Status Codes
18. Production Grade PATCH Endpoint
19. Best Practices
20. Interview Questions

---

# What is PATCH?

PATCH is an HTTP method used to partially update an existing resource.

Unlike PUT:

PUT replaces the entire resource.

PATCH modifies only specific fields.

Example:

Current User

```json
{
  "id": 1,
  "name": "John",
  "email": "john@gmail.com",
  "city": "Hyderabad",
  "bio": "Software Engineer"
}
```

PATCH Request

```http
PATCH /users/1
```

Body

```json
{
  "bio": "Senior Software Engineer"
}
```

Result

```json
{
  "id": 1,
  "name": "John",
  "email": "john@gmail.com",
  "city": "Hyderabad",
  "bio": "Senior Software Engineer"
}
```

Only bio changed.

Everything else remains unchanged.

---

# Why PATCH Exists

Imagine Instagram.

User wants to update:

```text
Bio
```

Only.

Without PATCH:

Need to send:

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "city": "Hyderabad",
  "bio": "Senior Software Engineer"
}
```

Entire profile.

Wasteful.

PATCH exists to update only what changed.

---

# Real Problem Before PATCH

Suppose profile contains:

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "avatar": "avatar.jpg",
  "bio": "Developer",
  "followers": 5000,
  "settings": {}
}
```

Changing only bio should not require sending entire object.

PATCH solves this.

---

# Partial Updates

PATCH focuses on modifications.

Request

```json
{
  "bio": "Backend Engineer"
}
```

Only bio changes.

Request

```json
{
  "avatar": "new-avatar.jpg"
}
```

Only avatar changes.

Request

```json
{
  "city": "Mumbai"
}
```

Only city changes.

---

# PATCH Mental Model

PUT

```text
Replace whole document
```

PATCH

```text
Edit selected lines
```

Think:

Word Document

PUT

Replace entire document.

PATCH

Edit paragraph 3 only.

---

# PATCH vs PUT

Most common interview question.

PUT

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "city": "Hyderabad"
}
```

Expected:

Complete representation.

PATCH

```json
{
  "city": "Mumbai"
}
```

Expected:

Only changed fields.

---

# PUT vs PATCH Comparison

| Feature               | PUT       | PATCH       |
| --------------------- | --------- | ----------- |
| Full Update           | Yes       | No          |
| Partial Update        | No        | Yes         |
| Sends Entire Resource | Yes       | No          |
| Smaller Payload       | No        | Yes         |
| Common For Settings   | No        | Yes         |
| Common For Profiles   | Sometimes | Very Common |

---

# PATCH vs POST

POST

Creates resources.

```http
POST /users
```

PATCH

Modifies resources.

```http
PATCH /users/1
```

---

# Resource Modification

PATCH modifies existing resources.

Examples

Update Bio

```http
PATCH /profile
```

Update Theme

```http
PATCH /settings
```

Update Avatar

```http
PATCH /avatar
```

Update Notification Settings

```http
PATCH /preferences
```

---

# Field-Level Updates

PATCH operates on specific fields.

Example

```json
{
  "bio": "Backend Developer"
}
```

Only bio updated.

Example

```json
{
  "theme": "dark"
}
```

Only theme updated.

Example

```json
{
  "language": "en"
}
```

Only language updated.

---

# Multiple Field Updates

Request

```json
{
  "bio": "Senior Engineer",
  "city": "Bangalore"
}
```

Result

Only bio and city change.

Other fields remain untouched.

---

# Object.assign()

Very common PATCH technique.

Current User

```javascript
const user = {
  name: "John",
  city: "Hyderabad",
  bio: "Developer",
};
```

PATCH Body

```javascript
{
  bio: "Senior Developer";
}
```

Update

```javascript
Object.assign(user, req.body);
```

Result

```javascript
{
 name:"John",
 city:"Hyderabad",
 bio:"Senior Developer"
}
```

---

# Why Object.assign() Is Popular

Simple.

Fast.

Dynamic.

Handles multiple fields automatically.

---

# Danger of Object.assign()

Bad

```javascript
Object.assign(user, req.body);
```

Request

```json
{
  "role": "admin"
}
```

Potential privilege escalation.

Never blindly trust req.body.

Whitelist fields.

---

# Safe Object.assign()

```javascript
const allowedFields = ["bio", "city", "avatar"];

for (const key of allowedFields) {
  if (req.body[key] !== undefined) {
    user[key] = req.body[key];
  }
}
```

Safe.

Controlled.

---

# Request Lifecycle

Client

↓

PATCH Request

↓

Load Balancer

↓

Express Server

↓

Authentication

↓

Authorization

↓

Validation

↓

Database Lookup

↓

Field Updates

↓

Save Changes

↓

Cache Invalidation

↓

Response

↓

Client

---

# Basic PATCH Route

```javascript
app.patch("/users/:id", (req, res) => {
  res.json({
    success: true,
  });
});
```

---

# Reading Params

```http
PATCH /users/5
```

Access

```javascript
req.params.id;
```

---

# Reading Body

```json
{
  "bio": "Backend Engineer"
}
```

Access

```javascript
req.body.bio;
```

---

# Validation Strategies

PATCH validation differs from PUT.

PUT

Requires all fields.

PATCH

Validates only supplied fields.

---

# Example

Bad

```javascript
if (!name || !email) {
  return error;
}
```

PATCH may only update bio.

Therefore validate conditionally.

---

# Conditional Validation

```javascript
if (req.body.email && !emailRegex.test(req.body.email)) {
  return res.status(400).json({
    message: "Invalid Email",
  });
}
```

---

# Allowed Fields Validation

Prevent unwanted updates.

```javascript
const allowed = ["bio", "city", "avatar"];
```

Check:

```javascript
const updates = Object.keys(req.body);

const valid = updates.every((field) => allowed.includes(field));
```

---

# Production Update Flow

Instagram Bio Update

```http
PATCH /profile
```

Flow

Authenticate

↓

Validate Bio

↓

Update Database

↓

Clear Cache

↓

Publish Event

↓

Return Updated Profile

---

# Profile Update Scenario

Request

```json
{
  "bio": "Node.js Developer"
}
```

Result

Only bio changes.

Followers still preserved.

Posts still preserved.

Settings still preserved.

---

# Avatar Update Scenario

Request

```json
{
  "avatar": "new-avatar.jpg"
}
```

Update only avatar.

Everything else remains unchanged.

---

# Settings Update Scenario

Request

```http
PATCH /settings
```

Body

```json
{
  "theme": "dark"
}
```

Result

Only theme changes.

Language stays same.

Notification settings stay same.

---

# Notification Preferences Example

Current

```json
{
  "email": true,
  "sms": true,
  "push": false
}
```

Request

```json
{
  "push": true
}
```

Result

```json
{
  "email": true,
  "sms": true,
  "push": true
}
```

---

# Security Concerns

PATCH endpoints are highly sensitive.

---

# Authentication

Require user identity.

```http
Authorization: Bearer TOKEN
```

---

# Authorization

User must update only own data.

Bad

```http
PATCH /users/100
```

Good

Verify ownership.

```javascript
if (req.user.id !== user.id) {
  return res.status(403).json({});
}
```

---

# Mass Assignment

Dangerous

```json
{
  "role": "admin"
}
```

Never allow unrestricted updates.

Whitelist fields.

---

# XSS Protection

Input

```html
<script>
  alert(1);
</script>
```

Sanitize before storing.

---

# Audit Logging

Track changes.

```text
Old Bio:
Developer

New Bio:
Senior Developer
```

Useful for compliance.

---

# Common Mistakes

Mistake #1

Using PATCH like PUT.

Wrong:

Require entire object.

PATCH should support partial updates.

---

# Mistake #2

Blind Object.assign()

Dangerous.

---

# Mistake #3

No Allowed Fields Check

Users modify protected fields.

---

# Mistake #4

Skipping Authorization

User updates another user's profile.

---

# Mistake #5

No Validation

Invalid data enters database.

---

# Edge Cases

---

# Empty Request Body

Request

```json
{}
```

Response

```http
400 Bad Request
```

Nothing to update.

---

# Invalid Field

Request

```json
{
  "hack": "value"
}
```

Response

```http
400 Bad Request
```

Field not allowed.

---

# User Not Found

```http
PATCH /users/999
```

Response

```http
404 Not Found
```

---

# Concurrent Updates

Request A

```json
{
  "bio": "Engineer"
}
```

Request B

```json
{
  "city": "Mumbai"
}
```

Arrive simultaneously.

Need:

- Transactions
- Versioning
- Optimistic Locking

---

# Status Codes

## 200 OK

Update successful.

```javascript
res.status(200).json(user);
```

---

## 204 No Content

Update successful.

No response body.

---

## 400 Bad Request

Validation failed.

---

## 401 Unauthorized

Authentication missing.

---

## 403 Forbidden

No permission.

---

## 404 Not Found

Resource not found.

---

## 409 Conflict

Update conflicts with existing data.

Example:

Duplicate email.

---

## 500 Internal Server Error

Unexpected failure.

---

# Production Grade PATCH Endpoint

```javascript
app.patch("/users/:id", async (req, res) => {
  try {
    const allowed = ["bio", "city", "avatar"];

    const updates = Object.keys(req.body);

    const valid = updates.every((field) => allowed.includes(field));

    if (!valid) {
      return res.status(400).json({
        message: "Invalid Updates",
      });
    }

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    updates.forEach((field) => {
      user[field] = req.body[field];
    });

    await user.save();

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
```

---

# Best Practices

✓ Validate Only Updated Fields

✓ Whitelist Allowed Fields

✓ Authenticate Users

✓ Authorize Ownership

✓ Audit Changes

✓ Sanitize Input

✓ Avoid Blind Object.assign()

✓ Keep Payload Small

✓ Use Consistent Responses

✓ Monitor Update Activity

✓ Implement Versioning

✓ Log Sensitive Updates

✓ Clear Cache After Updates

✓ Use Schema Validation

---

# Interview Questions

Q1. Why does PATCH exist?

Answer:

To partially update resources.

---

Q2. Difference between PATCH and PUT?

PUT replaces entire resource.

PATCH updates specific fields.

---

Q3. Is PATCH idempotent?

Can be.

Not guaranteed by specification.

Example:

```json
{
  "name": "John"
}
```

Usually idempotent.

Counter Example:

```json
{
  "incrementLikes": 1
}
```

Not idempotent.

---

Q4. Why use PATCH for profile updates?

Only changed fields need updating.

---

Q5. What is mass assignment?

Updating unintended fields from request body.

---

Q6. Why whitelist fields?

Prevent unauthorized modifications.

---

Q7. What status code for successful PATCH?

```http
200 OK
```

or

```http
204 No Content
```

---

Q8. Why validate only provided fields?

PATCH supports partial updates.

---

Q9. Biggest PATCH security risk?

Mass assignment vulnerability.

---

Q10. Why avoid blind Object.assign()?

Users can update protected fields.

---

# Senior Backend Engineer Summary

PATCH is:

✓ Partial Update Method

✓ Field-Level Modification

✓ Smaller Payloads

✓ Ideal For Profile Updates

✓ Ideal For Settings Updates

✓ Requires Validation

✓ Requires Authorization

✓ Common In Modern APIs

✓ Often Uses Object.assign()

✓ Must Protect Against Mass Assignment

Mastering PATCH is essential for building efficient, scalable, production-grade update APIs.

# DELETE Method in Node.js & Express

## Complete Backend Engineering Guide

---

# Table of Contents

1. What is DELETE?
2. Why DELETE Exists
3. Resource Removal
4. DELETE vs PUT vs PATCH
5. Hard Delete
6. Soft Delete
7. DELETE Request Lifecycle
8. Data Integrity Concerns
9. Authorization Checks
10. Security Considerations
11. Production Deletion Flows
12. Status Codes
13. Common Mistakes
14. Edge Cases
15. Real World Deletion Systems
16. Production Grade DELETE Endpoint
17. Best Practices
18. Interview Questions

---

# What is DELETE?

DELETE is an HTTP method used to remove an existing resource from a system.

Example:

```http
DELETE /users/10
```

Meaning:

```text
Remove User #10
```

After successful deletion:

```http
GET /users/10
```

returns:

```http
404 Not Found
```

because the resource no longer exists.

---

# Why DELETE Exists

Applications constantly create data.

Examples:

- Users create accounts
- Products are added
- Orders are generated
- Posts are published
- Comments are created

Without DELETE:

```text
Data only grows forever.
```

Systems need a way to remove resources.

DELETE exists for that purpose.

---

# Resource Removal

DELETE represents removal of a resource.

Examples:

Delete User

```http
DELETE /users/10
```

Delete Product

```http
DELETE /products/100
```

Delete Comment

```http
DELETE /comments/55
```

Delete Notification

```http
DELETE /notifications/200
```

---

# DELETE Mental Model

Imagine a file.

Before:

```text
Resume.pdf
```

DELETE:

```text
Delete Resume.pdf
```

After:

```text
File not found
```

The resource disappears.

---

# DELETE Characteristics

DELETE is:

✓ Destructive

✓ State Changing

✓ Usually Idempotent

✓ Requires Authorization

✓ High Risk Operation

✓ Often Audited

---

# DELETE Idempotency

DELETE is generally idempotent.

Example:

Request 1

```http
DELETE /users/10
```

User removed.

Request 2

```http
DELETE /users/10
```

User already gone.

Final state:

```text
User does not exist
```

Same result.

Therefore DELETE is idempotent.

---

# DELETE vs PUT vs PATCH

PUT

```text
Replace Resource
```

PATCH

```text
Modify Resource
```

DELETE

```text
Remove Resource
```

---

# HTTP CRUD Mapping

| CRUD   | HTTP      |
| ------ | --------- |
| Create | POST      |
| Read   | GET       |
| Update | PUT/PATCH |
| Delete | DELETE    |

---

# Hard Delete

Hard delete physically removes data.

Database Before

```text
Users Table

1
2
3
```

Delete User 2

Database After

```text
1
3
```

User 2 gone forever.

---

# MongoDB Hard Delete

```javascript
await User.findByIdAndDelete(id);
```

---

# SQL Hard Delete

```sql
DELETE FROM users
WHERE id=10;
```

---

# Advantages of Hard Delete

✓ Frees storage

✓ Simpler queries

✓ Less data maintenance

✓ Permanent removal

---

# Disadvantages of Hard Delete

✗ No recovery

✗ Audit history lost

✗ Legal issues possible

✗ Accidental deletion dangerous

---

# Soft Delete

Most production systems prefer soft delete.

Instead of removing row:

Mark it deleted.

Before

```json
{
  "id": 1,
  "name": "John"
}
```

After

```json
{
  "id": 1,
  "name": "John",
  "deleted": true
}
```

Data still exists.

---

# MongoDB Soft Delete

```javascript
await User.updateOne(
  {
    _id: id,
  },
  {
    deleted: true,
  },
);
```

---

# Better Soft Delete

```javascript
await User.updateOne(
  {
    _id: id,
  },
  {
    deletedAt: new Date(),
  },
);
```

---

# Why Companies Prefer Soft Delete

Instagram

User deletes account.

Data retained temporarily.

Amazon

Deleted orders remain for auditing.

LinkedIn

Profiles recoverable.

Netflix

Watch history preserved.

---

# Soft Delete Query

Bad

```javascript
User.find();
```

Good

```javascript
User.find({
  deleted: false,
});
```

Always filter deleted records.

---

# DELETE Request Lifecycle

Client

↓

DELETE Request

↓

Load Balancer

↓

Express Server

↓

Authentication

↓

Authorization

↓

Resource Lookup

↓

Business Rules

↓

Delete Operation

↓

Audit Logging

↓

Cache Invalidation

↓

Response

↓

Client

---

# Basic DELETE Route

```javascript
app.delete("/users/:id", (req, res) => {
  res.json({
    success: true,
  });
});
```

---

# Route Parameters

Request

```http
DELETE /users/10
```

Access

```javascript
req.params.id;
```

Output

```javascript
10;
```

---

# Resource Lookup

Before deleting:

Verify existence.

```javascript
const user = await User.findById(id);
```

If missing:

```javascript
return res.status(404).json({
  message: "User Not Found",
});
```

---

# Data Integrity Concerns

Senior engineers spend huge effort here.

Deletion can break relationships.

---

# Example Problem

Users

```text
User 10
```

Orders

```text
Order A
Order B
Order C
```

Delete User 10.

What happens to orders?

---

# Orphan Records

Before

```text
User
  ↓
Orders
```

After Delete

```text
Orders
```

No owner.

These are orphan records.

Dangerous.

---

# Solutions

1. Cascade Delete

Delete everything.

2. Restrict Delete

Prevent deletion.

3. Reassign Ownership

Transfer records.

4. Soft Delete

Keep relationships intact.

---

# Cascade Delete

Delete user.

Delete all orders.

Delete all addresses.

Delete all preferences.

Example:

```javascript
await Order.deleteMany({
  userId: id,
});

await User.deleteOne({
  _id: id,
});
```

---

# Restrict Delete

If user owns orders:

```javascript
if (orderCount > 0) {
  return res.status(409).json({
    message: "Cannot Delete User",
  });
}
```

---

# Authorization Checks

Most important DELETE protection.

---

# Authentication

Require valid user.

```http
Authorization: Bearer TOKEN
```

---

# Authorization

User A must not delete User B.

Bad

```http
DELETE /users/100
```

Good

```javascript
if (req.user.id !== user.id) {
  return res.status(403).json({
    message: "Forbidden",
  });
}
```

---

# Role Based Deletion

Admins may delete users.

```javascript
if (req.user.role !== "ADMIN") {
  return res.status(403).json({
    message: "Forbidden",
  });
}
```

---

# Security Considerations

DELETE endpoints are high risk.

---

# Ownership Verification

Always verify ownership.

Never trust URL IDs.

---

# Mass Deletion Attacks

Dangerous endpoint:

```http
DELETE /users
```

Without protections.

Could destroy entire system.

---

# Audit Logging

Track every deletion.

Store:

```text
Who deleted?

When?

What resource?

Why?
```

Example

```javascript
await AuditLog.create({
  action: "DELETE_USER",
  userId: req.user.id,
  targetId: id,
});
```

---

# Rate Limiting

Prevent abuse.

```javascript
max: 10;
```

deletions per minute.

---

# Confirmation Systems

Production UIs often require:

```text
Type DELETE

or

Enter Password
```

Before deletion.

---

# Production Deletion Flow

Instagram Account Deletion

User

↓

Enter Password

↓

Verify Identity

↓

Schedule Deletion

↓

30 Day Recovery Window

↓

Permanent Delete

---

# Amazon Product Delete

Admin

↓

Permission Check

↓

Inventory Validation

↓

Delete Product

↓

Invalidate Cache

↓

Update Search Index

↓

Log Action

---

# LinkedIn Account Deletion

User

↓

Verify Email

↓

Verify Password

↓

Deactivate Profile

↓

Grace Period

↓

Permanent Removal

---

# Netflix Profile Deletion

User

↓

Delete Profile

↓

Remove Recommendations

↓

Update Watch History Mapping

↓

Clear Cached Data

↓

Return Success

---

# Status Codes

## 200 OK

Deletion successful.

```javascript
res.status(200).json({
  success: true,
});
```

---

# 204 No Content

Deletion successful.

No response body.

```javascript
res.status(204).send();
```

Very common.

---

# 404 Not Found

Resource missing.

```javascript
res.status(404).json({
  message: "Not Found",
});
```

---

# 401 Unauthorized

Authentication missing.

---

# 403 Forbidden

No permission.

---

# 409 Conflict

Business rule prevents deletion.

Example:

```text
User owns active orders.
```

---

# 500 Internal Server Error

Unexpected failure.

---

# Common Mistakes

Mistake #1

Skipping authorization.

Huge security issue.

---

# Mistake #2

Hard deleting critical data.

Recovery impossible.

---

# Mistake #3

Ignoring relationships.

Creates orphan records.

---

# Mistake #4

No audit logs.

Cannot investigate incidents.

---

# Mistake #5

No soft delete support.

Recovery becomes impossible.

---

# Mistake #6

Deleting resources still in use.

Breaks system integrity.

---

# Edge Cases

---

# Resource Already Deleted

Request

```http
DELETE /users/10
```

User already removed.

Response

```http
404 Not Found
```

or

```http
204 No Content
```

depending on API design.

---

# Concurrent Deletes

Request A

↓

Delete User

Request B

↓

Delete Same User

Need safe handling.

---

# Partial Failures

Delete User

✓

Delete Orders

✗

Database inconsistent.

Solution:

Transactions.

---

# Transaction Example

```javascript
const session = await mongoose.startSession();

session.startTransaction();

try {
  await User.deleteOne();

  await Order.deleteMany();

  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
}
```

---

# Production Grade DELETE Endpoint

```javascript
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    if (req.user.id !== user.id && req.user.role !== "ADMIN") {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    await User.updateOne(
      {
        _id: id,
      },
      {
        deleted: true,
        deletedAt: new Date(),
      },
    );

    await AuditLog.create({
      action: "DELETE_USER",
      targetId: id,
      actor: req.user.id,
    });

    return res.status(200).json({
      success: true,
      message: "User Deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
```

---

# Best Practices

✓ Prefer Soft Delete

✓ Authenticate Every Request

✓ Authorize Every Deletion

✓ Verify Ownership

✓ Use Audit Logs

✓ Apply Rate Limiting

✓ Use Transactions

✓ Protect Relationships

✓ Avoid Orphan Records

✓ Invalidate Cache

✓ Monitor Delete Activity

✓ Require Confirmation

✓ Log Every Deletion

✓ Use Grace Periods

✓ Implement Recovery Flows

---

# Interview Questions

Q1. Why does DELETE exist?

Answer:

To remove resources from a system.

---

Q2. Is DELETE idempotent?

Yes.

Repeated requests result in same final state.

---

Q3. Difference between soft delete and hard delete?

Hard delete removes data physically.

Soft delete marks data deleted.

---

Q4. Which delete strategy do large companies prefer?

Soft delete.

Because data can be recovered.

---

Q5. What status code for successful deletion?

```http
200 OK
```

or

```http
204 No Content
```

---

Q6. What status code if resource does not exist?

```http
404 Not Found
```

---

Q7. Why is authorization critical?

To prevent unauthorized deletions.

---

Q8. What are orphan records?

Child records with missing parent records.

---

Q9. Why use transactions?

Prevent partial deletions.

---

Q10. Biggest DELETE security risk?

Unauthorized or accidental deletion of resources.

---

# Senior Backend Engineer Summary

DELETE is:

✓ Resource Removal Method

✓ Usually Idempotent

✓ High Risk Operation

✓ Requires Authorization

✓ Often Uses Soft Delete

✓ Requires Audit Logging

✓ Requires Data Integrity Checks

✓ Requires Relationship Handling

✓ Returns 200 or 204

✓ Critical For Production Systems

Mastering DELETE is essential for building safe, scalable, enterprise-grade backend APIs.

# Express Request Object (req)

## Complete Backend Engineering Guide

---

# Table of Contents

1. What is Request Object?
2. Request Lifecycle
3. Anatomy of an HTTP Request
4. req.body
5. req.params
6. req.query
7. req.headers
8. req.method
9. req.url
10. req.path
11. req.ip
12. req.cookies
13. Real World Request Flows
14. Debugging Techniques
15. Security Implications
16. Common Mistakes
17. Production Examples
18. Interview Questions

---

# What is Request Object?

In Express.js, every incoming HTTP request is represented by a Request Object.

Express creates this object automatically.

```javascript
app.get("/users", (req, res) => {});
```

Here:

```javascript
req;
```

contains everything about the incoming request.

Think of it as:

```text
A package containing
all information sent by client.
```

---

# Request Lifecycle

Browser

↓

HTTP Request

↓

Node.js Server

↓

Express Middleware

↓

Express Route

↓

Request Object Created

↓

Controller

↓

Response Sent

---

# Visual Flow

Client

```http
GET /users/10?page=2
```

↓

Express

Creates

```javascript
req;
```

↓

Contains

```javascript
req.params;
req.query;
req.headers;
req.method;
req.url;
```

↓

Route Handler

---

# Anatomy of HTTP Request

Example

```http
GET /users/10?page=2 HTTP/1.1

Host: api.example.com

Authorization: Bearer token

Cookie: theme=dark
```

Express converts this into:

```javascript
req;
```

object.

---

# Request Object Overview

Common Properties

```javascript
req.body;
req.params;
req.query;
req.headers;
req.method;
req.url;
req.path;
req.ip;
req.cookies;
```

These are used in almost every backend application.

---

# req.body

Most important for:

POST

PUT

PATCH

Requests.

Contains request body data.

---

# Example

Request

```http
POST /users
```

Body

```json
{
  "name": "John",
  "email": "john@gmail.com"
}
```

Express

```javascript
app.use(express.json());
```

Access

```javascript
req.body;
```

Output

```javascript
{
 name:"John",
 email:"john@gmail.com"
}
```

---

# req.body Flow

Client

```json
{
  "name": "John"
}
```

↓

express.json()

↓

req.body

↓

Controller

```javascript
req.body.name;
```

---

# Why express.json() Matters

Without:

```javascript
app.use(express.json());
```

Result:

```javascript
req.body === undefined;
```

Common beginner mistake.

---

# Real World Example

Instagram Registration

```json
{
  "username": "john",
  "email": "john@gmail.com",
  "password": "123456"
}
```

Access

```javascript
req.body.username;
req.body.email;
req.body.password;
```

---

# Security Concern

Never trust:

```javascript
req.body;
```

Validate everything.

Bad

```javascript
User.create(req.body);
```

Good

```javascript
validate(req.body);
```

---

# req.params

Used for route parameters.

---

# Example

Route

```javascript
app.get("/users/:id");
```

Request

```http
GET /users/100
```

Access

```javascript
req.params;
```

Output

```javascript
{
  id: "100";
}
```

---

# Multiple Parameters

Route

```javascript
/users/:userId/orders/:orderId
```

Request

```http
/users/5/orders/100
```

Output

```javascript
{
 userId:"5",
 orderId:"100"
}
```

---

# Real World Example

Amazon Product

```http
/products/12345
```

Access

```javascript
req.params.id;
```

---

# Security Concern

Never trust IDs.

Validate.

Bad

```javascript
const id = req.params.id;
```

Good

```javascript
const id = Number(req.params.id);

if (isNaN(id)) {
  return error;
}
```

---

# req.query

Used for optional request parameters.

---

# Example

Request

```http
GET /products?page=2&limit=10
```

Access

```javascript
req.query;
```

Output

```javascript
{
 page:"2",
 limit:"10"
}
```

---

# Real World Usage

Filtering

```http
/products?category=laptop
```

Searching

```http
/products?search=iphone
```

Pagination

```http
/products?page=2
```

Sorting

```http
/products?sort=price
```

---

# Query Parameter Flow

Client

```http
?page=2
```

↓

Express

```javascript
req.query.page;
```

↓

Database Query

---

# Security Concern

User sends:

```http
?limit=999999999
```

Dangerous.

Always validate.

```javascript
const limit = Math.min(Number(req.query.limit) || 10, 100);
```

---

# req.headers

Contains HTTP headers.

---

# Example Request

```http
Authorization: Bearer TOKEN

Content-Type: application/json

User-Agent: Chrome
```

Access

```javascript
req.headers;
```

Output

```javascript
{
 authorization:"Bearer TOKEN",
 contentType:"application/json"
}
```

---

# Reading Authorization Header

```javascript
const auth = req.headers.authorization;
```

Output

```javascript
Bearer TOKEN
```

---

# Real World Usage

Authentication

```javascript
const token = req.headers.authorization;
```

API Keys

```javascript
req.headers["x-api-key"];
```

Versioning

```javascript
req.headers["api-version"];
```

---

# Security Concern

Never log:

```javascript
Authorization;
```

headers in production.

Contains secrets.

---

# req.method

Returns HTTP method.

Example

```http
GET
POST
PUT
PATCH
DELETE
```

---

# Example

```javascript
console.log(req.method);
```

Output

```javascript
GET;
```

---

# Real World Usage

Logging

```javascript
console.log(req.method);
```

Analytics

Monitoring

Auditing

---

# req.url

Returns full URL path including query string.

---

# Example

Request

```http
/products?page=2
```

Output

```javascript
req.url;
```

```javascript
/products?page=2
```

---

# Real World Usage

Logging

Analytics

Debugging

Monitoring

---

# req.path

Returns path only.

Removes query string.

---

# Example

Request

```http
/products?page=2
```

Output

```javascript
req.path;
```

```javascript
/products
```

---

# Difference

req.url

```javascript
/products?page=2
```

req.path

```javascript
/products
```

---

# Real World Usage

Route Tracking

Metrics

Monitoring

---

# req.ip

Returns client IP address.

---

# Example

```javascript
console.log(req.ip);
```

Output

```javascript
127.0.0.1
```

or

```javascript
(192.168).x.x;
```

---

# Real World Usage

Rate Limiting

Fraud Detection

Geo Location

Security Monitoring

Audit Logs

---

# Security Concern

Behind proxies:

```javascript
req.ip;
```

may not be real IP.

Use:

```javascript
app.set("trust proxy", true);
```

---

# req.cookies

Contains browser cookies.

Requires:

```bash
npm install cookie-parser
```

---

# Setup

```javascript
const cookieParser = require("cookie-parser");

app.use(cookieParser());
```

---

# Example Request

```http
Cookie:
theme=dark;
token=abc123
```

Access

```javascript
req.cookies;
```

Output

```javascript
{
 theme:"dark",
 token:"abc123"
}
```

---

# Real World Usage

Sessions

Authentication

Preferences

Theme Settings

Shopping Cart

---

# Security Concern

Never trust cookies.

Sign or encrypt sensitive cookies.

---

# Complete Request Example

Request

```http
PATCH /users/10?
page=2

Authorization:
Bearer TOKEN

Cookie:
theme=dark
```

Body

```json
{
  "bio": "Backend Engineer"
}
```

Express

```javascript
req.params.id;
```

```javascript
10;
```

```javascript
req.query.page;
```

```javascript
2;
```

```javascript
req.body.bio;
```

```javascript
Backend Engineer
```

```javascript
req.headers.authorization;
```

```javascript
Bearer TOKEN
```

```javascript
req.cookies.theme;
```

```javascript
dark;
```

---

# Debugging Techniques

Log Everything

```javascript
console.log(req.body);
console.log(req.params);
console.log(req.query);
console.log(req.headers);
```

---

# Pretty Debugging

```javascript
console.log({
  body: req.body,
  params: req.params,
  query: req.query,
});
```

---

# Full Request Inspection

```javascript
console.dir(req, { depth: null });
```

Use carefully.

Huge output.

---

# Production Logging

Use Morgan

```javascript
npm install morgan
```

Setup

```javascript
app.use(morgan("combined"));
```

Logs

```text
GET /users 200
```

---

# Common Mistakes

Mistake #1

Forgetting

```javascript
express.json();
```

Result:

```javascript
req.body;
```

undefined.

---

# Mistake #2

Using req.params instead of req.query

Wrong

```javascript
/products?page=2
```

```javascript
req.params.page;
```

Undefined.

Correct

```javascript
req.query.page;
```

---

# Mistake #3

Trusting req.body blindly.

---

# Mistake #4

Trusting req.ip behind proxies.

---

# Mistake #5

Logging sensitive headers.

---

# Production Example

```javascript
app.patch("/users/:id", async (req, res) => {
  const userId = req.params.id;

  const token = req.headers.authorization;

  const page = req.query.page;

  const body = req.body;

  const ip = req.ip;

  console.log({
    userId,
    token,
    page,
    ip,
  });

  res.status(200).json({
    success: true,
  });
});
```

---

# Interview Questions

Q1. What is req.body?

Answer:

Request payload data.

Used in POST, PUT, PATCH.

---

Q2. What is req.params?

Answer:

Route parameters.

Example:

```http
/users/10
```

---

Q3. What is req.query?

Answer:

Query string values.

Example:

```http
?page=2
```

---

Q4. Difference between params and query?

Params identify resource.

Query modifies result.

---

Q5. Why does req.body become undefined?

Missing:

```javascript
express.json();
```

---

Q6. What is req.headers used for?

Authentication.

Metadata.

Content negotiation.

---

Q7. Difference between req.url and req.path?

req.url

Includes query string.

req.path

Excludes query string.

---

Q8. Why use req.ip?

Rate limiting.

Fraud detection.

Security.

---

Q9. Why use req.cookies?

Session management.

Authentication.

Preferences.

---

Q10. Biggest security risk with req?

Trusting user-controlled input.

---

# Senior Backend Engineer Summary

req.body

✓ Request Payload

POST / PUT / PATCH

---

req.params

✓ Route Variables

/users/:id

---

req.query

✓ Filtering

Searching

Pagination

Sorting

---

req.headers

✓ Authentication

Metadata

---

req.method

✓ HTTP Method

---

req.url

✓ Full URL

---

req.path

✓ URL Without Query String

---

req.ip

✓ Client Address

---

req.cookies

✓ Sessions

Authentication

Preferences

Mastering the Request Object is essential because almost every backend API endpoint depends on it.

# Express Response Object (res)

## Complete Backend Engineering Guide

---

# Table of Contents

1. What is Response Object?
2. Response Lifecycle
3. Anatomy of an HTTP Response
4. res.send()
5. res.json()
6. res.status()
7. res.sendFile()
8. res.download()
9. res.redirect()
10. res.set()
11. Content Negotiation
12. Real World Response Flows
13. Best Practices
14. Security Considerations
15. Debugging Techniques
16. Common Mistakes
17. Production Examples
18. Interview Questions

---

# What is Response Object?

In Express.js, every incoming request gets a response object.

```javascript
app.get("/users", (req, res) => {});
```

Here:

```javascript
res;
```

represents the outgoing response.

Think of it as:

```text
The package Express sends back
to the client.
```

---

# Request vs Response

Request

```javascript
req;
```

Contains:

```text
What client sent
```

Response

```javascript
res;
```

Contains:

```text
What server sends back
```

---

# Request Response Cycle

Client

↓

HTTP Request

↓

Express Route

↓

Business Logic

↓

Database Query

↓

Response Object

↓

Client Receives Data

---

# Visual Flow

Browser

↓

GET /users

↓

Express

↓

Database

↓

res.json()

↓

HTTP Response

↓

Browser

---

# Anatomy of HTTP Response

Example

```http
HTTP/1.1 200 OK

Content-Type: application/json

{
  "success": true
}
```

Response contains:

Status Code

Headers

Body

---

# Response Structure

```text
Status Code
    ↓
Headers
    ↓
Body
```

Example

```http
200 OK

Content-Type: application/json

{
 "id":1
}
```

---

# Most Common Response Methods

```javascript
res.send();
res.json();
res.status();
res.sendFile();
res.download();
res.redirect();
res.set();
```

These cover most production use cases.

---

# res.send()

Most flexible response method.

Can send:

- String
- HTML
- Object
- Buffer

---

# String Example

```javascript
app.get("/", (req, res) => {
  res.send("Hello World");
});
```

Response

```text
Hello World
```

---

# HTML Example

```javascript
res.send(`
<h1>Welcome</h1>
`);
```

Browser renders:

```html
<h1>Welcome</h1>
```

---

# Object Example

```javascript
res.send({
  success: true,
});
```

Express automatically converts to JSON.

---

# Buffer Example

```javascript
res.send(buffer);
```

Useful for binary data.

---

# When To Use res.send()

Small text responses.

Simple HTML.

Generic responses.

---

# Common Mistake

Using:

```javascript
res.send();
```

for APIs.

Better:

```javascript
res.json();
```

for JSON APIs.

---

# res.json()

Most common API response method.

Automatically:

✓ Converts object to JSON

✓ Sets Content-Type

✓ Sends response

---

# Example

```javascript
res.json({
  success: true,
});
```

Response

```json
{
  "success": true
}
```

---

# Equivalent

```javascript
res.send(JSON.stringify(data));
```

But res.json() is cleaner.

---

# Real World Example

Instagram API

```javascript
res.json({
  id: 1,
  username: "john",
});
```

---

# Production Usage

Most REST APIs use:

```javascript
res.json();
```

90% of the time.

---

# Common Response Format

```javascript
res.json({
  success: true,
  data: user,
});
```

Error Format

```javascript
res.status(400).json({
  success: false,
  message: "Invalid Input",
});
```

---

# res.status()

Sets HTTP status code.

---

# Example

```javascript
res.status(200);
```

---

# Chain Example

```javascript
res.status(200).json(data);
```

Most common pattern.

---

# Success Example

```javascript
res.status(201).json(user);
```

Meaning:

```text
Created successfully
```

---

# Error Example

```javascript
res.status(404).json({
  message: "Not Found",
});
```

---

# Why Status Codes Matter

Client understands result.

Example

```http
200
```

Success

```http
404
```

Missing

```http
500
```

Server Error

---

# Common Status Codes

```javascript
200;
201;
204;
400;
401;
403;
404;
409;
422;
429;
500;
```

Know these thoroughly.

---

# res.sendFile()

Sends a file to client.

---

# Example

```javascript
res.sendFile("/files/report.pdf");
```

---

# Flow

Server

↓

File System

↓

File

↓

Client

---

# Real World Examples

Terms PDF

```javascript
res.sendFile("terms.pdf");
```

Resume Download

Image Serving

Reports

Invoices

---

# Path Example

```javascript
const path = require("path");

res.sendFile(path.join(__dirname, "public", "index.html"));
```

---

# Common Mistake

Using relative paths incorrectly.

Always use:

```javascript
path.join();
```

---

# res.download()

Forces browser download.

---

# Example

```javascript
res.download("report.pdf");
```

---

# Difference

res.sendFile()

```text
Browser may display file.
```

res.download()

```text
Browser downloads file.
```

---

# Real World Example

Export Invoice

```javascript
res.download("invoice.pdf");
```

---

# Export CSV

```javascript
res.download("users.csv");
```

---

# Export Excel

```javascript
res.download("report.xlsx");
```

---

# res.redirect()

Redirects client.

---

# Example

```javascript
res.redirect("/login");
```

---

# Response

```http
302 Found
```

---

# Permanent Redirect

```javascript
res.redirect(301, "/new-url");
```

---

# Real World Example

User not authenticated.

↓

Redirect login page.

```javascript
res.redirect("/login");
```

---

# OAuth Flow

Google Login

↓

Callback

↓

Redirect Dashboard

---

# res.set()

Sets HTTP headers.

---

# Example

```javascript
res.set("Cache-Control", "public,max-age=3600");
```

---

# Multiple Headers

```javascript
res.set({
  "X-App": "Backend",
  "X-Version": "1.0",
});
```

---

# Common Headers

Content-Type

Cache-Control

Authorization

ETag

X-Powered-By

---

# Real World Example

Caching

```javascript
res.set("Cache-Control", "public,max-age=3600");
```

Browser caches response.

---

# Content Negotiation

Content negotiation determines response format.

Client says:

```http
Accept: application/json
```

Server returns:

```json
{}
```

---

# Example

Request

```http
Accept:text/html
```

Response

```html
<h1>Hello</h1>
```

---

# Request

```http
Accept:application/json
```

Response

```json
{
  "message": "Hello"
}
```

---

# Express Content Negotiation

```javascript
req.accepts(["json", "html"]);
```

---

# Real World API Flow

Client

↓

GET /profile

↓

Controller

↓

Database

↓

res.json()

↓

JSON Response

↓

Frontend Updates UI

---

# Production Example

GET User

```javascript
app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }

  return res.status(200).json({
    success: true,
    data: user,
  });
});
```

---

# Error Handling Example

```javascript
try {
} catch (error) {
  return res.status(500).json({
    success: false,
    message: error.message,
  });
}
```

---

# File Download Example

```javascript
app.get("/invoice", (req, res) => {
  res.download("invoice.pdf");
});
```

---

# Security Considerations

---

# Never Leak Errors

Bad

```javascript
res.status(500).json(error);
```

May expose internals.

Good

```javascript
res.status(500).json({
  message: "Server Error",
});
```

---

# Don't Leak Sensitive Data

Bad

```javascript
res.json(user);
```

Returns password.

Good

```javascript
res.json({
  id: user.id,
  name: user.name,
});
```

---

# Set Security Headers

Example

```javascript
res.set("X-Content-Type-Options", "nosniff");
```

Often handled by Helmet.

---

# Avoid Open Redirects

Bad

```javascript
res.redirect(req.query.url);
```

Attacker controls destination.

---

# Debugging Techniques

---

# Log Responses

```javascript
console.log(res.statusCode);
```

---

# Morgan

```javascript
npm install morgan
```

```javascript
app.use(morgan("combined"));
```

Logs:

```text
GET /users 200
```

---

# Inspect Headers

```javascript
console.log(res.getHeaders());
```

---

# Common Mistakes

Mistake #1

Sending multiple responses.

Wrong

```javascript
res.send("A");

res.send("B");
```

Error:

```text
Cannot set headers after they are sent
```

---

# Mistake #2

Forgetting return.

Wrong

```javascript
if (!user) {
  res.status(404).json({});
}

res.json(user);
```

Two responses.

---

# Correct

```javascript
if (!user) {
  return res.status(404).json({});
}
```

---

# Mistake #3

Using send() instead of json() for APIs.

---

# Mistake #4

Returning 200 for errors.

---

# Mistake #5

Sending body with 204.

---

# Production Response Patterns

Success

```javascript
{
 success:true,
 data:{}
}
```

Error

```javascript
{
 success:false,
 message:"Error"
}
```

Pagination

```javascript
{
 success:true,
 page:1,
 totalPages:10,
 data:[]
}
```

---

# Interview Questions

Q1. What is res?

Answer:

Express response object used to send data back to client.

---

Q2. Difference between send() and json()?

send()

General purpose.

json()

Specifically JSON.

---

Q3. Why use res.status()?

To set HTTP status code.

---

Q4. Difference between sendFile() and download()?

sendFile()

Displays file.

download()

Forces download.

---

Q5. What does redirect() do?

Sends redirect response.

---

Q6. What does set() do?

Sets HTTP headers.

---

Q7. Why is returning after response important?

Prevents multiple responses.

---

Q8. What causes:

```text
Cannot set headers after they are sent
```

Sending multiple responses.

---

Q9. What is content negotiation?

Choosing response format based on client request.

---

Q10. Most commonly used response methods?

```javascript
res.status();
res.json();
```

---

# Senior Backend Engineer Summary

res.send()

✓ Generic Response

---

res.json()

✓ API Responses

✓ JSON Output

---

res.status()

✓ HTTP Status Codes

---

res.sendFile()

✓ Serve Files

---

res.download()

✓ Force Download

---

res.redirect()

✓ Redirect Client

---

res.set()

✓ Set Headers

Mastering the Response Object is essential because every Express endpoint ultimately succeeds or fails through the response you send back to the client.
