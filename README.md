# SaketTest

## Part-A Theory Answers

### Q1) Mention the working of Internet Website in Terms of Front-end & Back-end Divisions
### Ans:-
### Front-end:
The front-end, also known as the client-side, refers to the part of a website that users interact with directly. It includes the user interface, design elements, and overall user experience. The front end parts(Technologies) coverd int the course are:-
#### a) HTML (Hypertext Markup Language): 
HTML is the fundamental building block of web pages. It provides the structure and content of the website by using tags to define elements like headings, paragraphs, images, and links.
#### b) CSS (Cascading Style Sheets);
CSS is responsible for the visual presentation of the website. It controls the layout, colors, fonts, and other visual aspects, enhancing the overall design and user experience.
#### c) JavaScript: 
JavaScript is a scripting language that adds interactivity and dynamic behavior to websites. It allows for the creation of interactive elements, animations, and event handling. JavaScript frameworks and libraries like React, Angular, and Vue.js are often used to simplify the development process.

### Back End:
The back-end, also known as the server-side, handles the behind-the-scenes operations of a website. It includes the server, database, and server-side application logic.
#### a) Server:
A server is a computer or a system that stores and delivers web pages to users upon request. It receives requests from the client-side and processes them to generate the appropriate response.
#### b) Databases: 
Websites often need to store and retrieve data. Databases, such as MySQL, PostgreSQL, MongoDB, or Oracle, are used to manage and store this data. They allow for efficient storage, retrieval, and manipulation of information.
#### c) APIs (Application Programming Interfaces):
APIs enable communication between different software systems. They allow the back-end of a website to interact with external services, such as payment gateways, social media platforms, or third-party APIs, to retrieve or send data.

### Q2) What are tags in HTML? Explain the each category of tag with an Example.
### Ans:-
DIfferent Types of HTML tags are as follows:
#### Structural Tags:
html, body, head, div all these tags are used to provide a structure to the website.
eg: <body>: Contains the visible content of the web page including text, images, links, and other elements.

#### Heading Tags:
h1 to h6: Defines heading levels from the largest (h1) to the smallest (h6). They are used to denote different sections or headings within the document.

#### Link Tags;
a tag: Creates a hyperlink. It is used to define a link to another web page, a specific section within the same page, or an external resource.

#### List Tags:
ul: Represents an unordered list.<br>
ol: Represents an ordered (numbered) list.

#### Table Tags:
table: Defines a table.
tr: Represents a table row.
th: Defines a table header cell.
td: Defines a table data cell.

### Q3) Explain the working Procedure of Virtual DOM.
### Ans:-
<ul>
  <h4>Working Procedure of Virtual DOM is as follows:</h4>
  <li>In React, everything is treated as a component.</li>
  <li> Whenever the state of any component is changed react updates its Virtual DOM tree.</li>
  <li>React maintains two Virtual DOM at each time, one contains the updated Virtual DOM and one which is just the pre-update version of this updated Virtual DOM.</li>
  <li>Now it compares the pre-update version with the updated Virtual DOM and figures out what exactly has changed in the DOM like which components have been changed.</li>
  <li>React finds out what exactly has changed then it updates those objects only, on real DOM.</li>
  <li>The re-rendering of the UI is the most expensive part and React manages to do this most efficiently by ensuring that the Real DOM receives batch updates to re-render the UI. </li>
</ul>

### Q4) Mention some Differences between MySQL and No SQL.
### Ans:-
<table>
  <tr>
    <th>MySQL</th>
    <th>NoSQL</th>
  </tr>
  <tr>
    <td>1.These databases have fixed or static or predefined schema</td>
    <td>1.They have a dynamic schema</td>
  </tr>
  <tr>
    <td>2.These databases are not suited for hierarchical data storage.</td>
    <td>2.These databases are best suited for hierarchical data storage</td>
  </tr>
  <tr>
    <td>3.These databases are best suited for complex queries</td>
    <td>3.These databases are not so good for complex queries</td>
  </tr>
   <tr>
    <td>4.Vertically Scalable</td>
    <td>4.Horizontally scalable</td>
  </tr>
</table>

### Q4) Explain any one DBMS Technology in your own words.
### Ans:-
#### RDBMS
RDBMS (Relational Database Management System) is a database management system is used to store, manage, and retrieve structured data.The model is based on the relational model, where rows and columns are organized into tables.Each table represents an entity, and each row represents a specific instance of that entity, while columns represent attributes or properties.<br>
The accuracy and consistency of the data can be maintained with the help of constraints, such as primary key, foreign key, and unique key constraints.It provides a standardized query language for performing operations on the data.
