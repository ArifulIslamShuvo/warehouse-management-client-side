import React from 'react';

const Bloge = () => {
    return (
        <div className='container py-3'>
            <div className="row">
                <div className='col-12 col-lg-4 caedItems'>
                    <h3> Difference between javascript and nodejs</h3>
                    <hr />
                    <p className='text-justify'>
                        node.JS and Javascript both of these are used for programming. But there is a significant difference between Node.JS and Javascript. JavaScript is a lightweight scripting language that is object-oriented. It is used for developing HTML pages that are dynamic and have various interactive effects on their web pages. The Node.JS, on the other hand, helps in representing a list of all the methods and objects that the JavaScript code can access when run via node interpreters or in the V8 engine.
                    </p>
                </div>
                <div className='col-12 col-lg-4 caedItems'>
                    <h3> Differences between sql and nosql databases?</h3>
                    <hr />
                    <p className='text-justify'>
                    SQL databases are a type of system software that supports management, analysis, capturing and querying the structured data in a relational format. NoSQL databases are a type of software that allows to maintain and retrieve structured, unstructured, polymorphic data for different purposes. SQL databases support Structured Query Languages. NonSQL does not have any declarative query language.SQL is relational.Non-SQL is non relational.SQL does not support hierarchical storage of data. NoSQL is best suited for hierarchical storage of data.
                    </p>
                </div>
                <div className='col-12 col-lg-4 caedItems'>
                    <h3> What is the purpose of jwt and how does it work?</h3>
                    <hr />
                    <p className='text-justify'>
                    JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it's an encoded JSON containing a set of claims and a signature. It's usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It's also a popular way to authenticate/authorize users in a microservice architectureWhen it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Bloge;