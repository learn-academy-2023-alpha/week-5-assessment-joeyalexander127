# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: Super can be really within ruby classes; You call super within child classes to inheriate info from the parent class. You can either place parameters within the super() or you can leave it blank to to leave defualt data when you are inharieting data from the parent. If you leave the parenthese empty it will leave the defualt data that was set in the super or parent class but you can also pass or override the parent data by placing data within the parentthese when you invoke super().

Researched answer: calling super within a class method or instance method invokes the same method defined in the superclass of the current class. It allows you to call the parent class's implementation of a method from within the child class's implementation of the same method.

2. What is a gem?

Your answer: GEM is a package manager for ruby  that allows developers to smoothly install the dependencies and libraries you might need for a project.

Researched answer: A gem is a package that provides specific functionality to a Rails application. A gem can be thought of as a library or module that can be easily added to a Rails application to extend its capabilities. Gems can be used to add various features to a Rails application, such as authentication, authorization, pagination, image handling, caching, and many more. Gems are managed using the RubyGems package manager, which is included with Ruby by default. RubyGems allows you to easily install, update, and remove gems from your system.

3. What is a relational database? Are there other kinds of databases?

Your answer: a relational database is a database that is organized into tables with a defined structure and relationship to other DBs. you connect these relational DBs through pimrary keys.

Researched answer: A relational database is a type of database that organizes data into one or more tables, where each table consists of a set of rows and columns. In a relational database, data is stored in a structured manner that allows for efficient retrieval and manipulation using SQL (Structured Query Language) commands. Tables can be related to each other based on common fields, allowing for the creation of complex queries that retrieve data from multiple tables.

4. What are primary keys? Why are they important?

Your answer: a primary key for a database is basically its ID. its how we identify data in a database. Its important because you can have multiple entries of data that are very similar and meet the conditional requirement at hand to return that data and it cant tell the difference between another entry you might have that meets the same requirement. Also they are important for relational databases and thats how you connect two databases to each other.

Researched answer: A primary key is a unique identifier that is used to uniquely identify each record in a table of a relational database. It is a column or set of columns that have a unique value for each row in the table. The primary key is used to enforce referential integrity and to ensure that each row in a table can be uniquely identified and accessed.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: The HTTP verbs are GET, POST, PUT, DELETE, PATCH, UPDATE. There correspinding CRUD actions are as follows:
GET - In CRUD, GET is equivalent to the READ operation.
POST - is equivalent to CREATE in CRUD actions
PUT - equivalent to the UPDATE CRUD action
DELETE - equivalent to DELETE
PATCH  -equivalent to the UPDATE CRUD action

Researched answer: These HTTP verbs are commonly used in RESTful APIs to perform CRUD operations on resources. In general, GET and HEAD correspond to Read, POST corresponds to Create, PUT and PATCH correspond to Update, and DELETE corresponds to Delete.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: REST (Representational State Transfer) is an architectural style for designing web services. RESTful routes are a convention for mapping HTTP verbs and URIs (Uniform Resource Identifiers) to CRUD (Create, Read, Update, Delete) operations on resources.

2. Model validations: Model validations are rules that are applied to data entered into a model to ensure that the data is valid and meets certain requirements.

3. Params: Params is short for parameter is a place holder for an argument. 

4. ERB: ERB (Embedded Ruby) is a templating system that allows developers to embed Ruby code into HTML, XML, and other text-based files. ERB is commonly used in web development frameworks like Ruby on Rails to generate dynamic content for web pages. Similar to React and using JSX which allows us to implement javascript within our HTML.

5. API: API stands for Application Programming Interface. An API is a set of protocols, routines, and tools that are used to build software applications. APIs define how different software components should interact with each other, allowing different applications to communicate and share data.
