# Project Plan

**Author**: Nicoll Douglas<br>
**Last Updated**: Monday 18<sup>th</sup> November 2024<br>

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Project Vision](#2-project-vision)
   1. [Goals & Motiviation](#21-goals--motivation)
   2. [The UI](#22-the-ui)
   3. [Delivery](#23-delivery)
3. [Technical Requirements](#3-technical-requirements)
4. [Features Overview](#4-features-overview)

## 1. Executive Summary

- **Project Name**: **TBD**
- **Objective**: Build a laid-back book club app / social networking app for readers and aspiring readers to track books read, books currently being read, engage in reading challenges, encourage reading, create virtual book clubs and socialise with like-minded people.
- **Target Users**: Readers, aspiring readers.
- **Project Duration**: Est. 3-6 Months
- **Medium**: Software, Web & Desktop

## 2. Project Vision

### 2.1 Goals & Motivation

- My vision is to make a sort of cozy "book club" app targeted at readers and aspiring readers to encourage reading, facilitate "book tracking" and socialisation / joint reading sessions.
- I want to create an application that doesn't feel soulless like a lot of business-level software feels nowadays. One that doesn't conform to traditional, cookie cutter UI design and business ideas but also has the same level of power and joy-of-use.
- A similar motivation is to create an application that encourages people to get off social media and engage in a productive activity virtually. Something that is a strong personal value of mine and in an age where people are sucked into their screens.
- Despite the conventional features I plan to add which are noted in another section, the UI is to be one of the main selling points.

### 2.2 The UI

Some example points below of my vision for the user interface:

#### Style:

- My vision for the visual look and style of the UI is for it to be somewhat gameified and have a pixel art style.

#### Functionality:

- Users can create a custom avatar by mixing and matching premade parts.
- Users can join a voice call together in order to hang out and read together.
- The screen will be populated with a "room", where participating users can set down their avatars in say, a chair or a bean bag and simulate the image of a real life book club.
- The avatars may have books in their hands and be clickable to see what others are reading.
- The rooms may have other visual aspects that serve as interactivity (e.g a door if people want to exit the voice call / room).

#### Other Key Points:

- The UX should be intuitive and easy to use like traditional user interfaces.
- The UI rendering should be performant in order to provide a smooth user experience.

### 2.3 Delivery

- The plan is to primarily deliver the project as a web application in the browser.
- I am also interested in delivering it as a desktop app with Electron, similar to discord and other cross-platform applications as the functionality of the application may be better served as a desktop app.

## 3. Technical Requirements

An overview of the technologies that I am planning to use for this project. Some are technologies that I am comfortable working with and that serve the needs of the application, and others are ones I want to use this opportunity to learn and use.

#### Frontend:

- Language: TypeScript
- Framework: Next.js
- Styling/CSS: TailwindCSS

#### Backend:

- Language: Java
- Framework: Spring Boot
- Database: MySQL

#### Authentication:

- Library: Next Auth (integrated with backend)
- OAuth Integration

#### Deployment & CI/CD:

- **TBD**

#### Version Control:

- Git with GitHub

## 4. Features Overview

### 4.1 User Management

#### Authentication

- **User registration**: Allow users to sign up securely with ~~basic credentials~~ magic link or OAuth2 with a seamless registration flow.
- **Login & Authentication**: Implement a login system and authentication middleware.

#### Account Management

- **Account Deactivation/Deletion**: Option for users to delete or deactivate their account whilst handling left over account data appropriately.
- **Account Blocking**: Allow users to block others if they want to disable interaction (with the option to unblock).

#### Administrative & Security Features:

- **Admin Accounts**: Implement admin accounts with a dashboard that allows for user management (i.e view user conduct, view reports, ban users etc.).
- **Access Control**: Define and implement, clear andspecific permissions for regular users vs admins to access relevant features with an effective access control strategy.
- **Account Reporting**: A reports system for handling suspected violations of community guidelines which admins can review in their dashboard.
- **Error Monitoring**: Detect and log system errors for proactive troubleshooting and maintenance.

### 4.2 Core

#### Book Management

- **Books Read**: Allow users to keep track of a list of books they have read.
- **Reading List**: Allow users to create a reading list of books they want to read.
- **Currently Reading**: Allow users to set the books they are currently reading.
- **Books API**: Integrate with a books API to allow users to search for books and perform certain actions in relation to them.
- **Privacy**: Allow users to set their lists to public or private, limiting what other users can see.
- **Affinity System**: Implement affinity statistics to allow users to see what books, authors and data on their lists they have in common with others.
- **Book Reviews**: Allow users to review books, rate them and like/dislike other people's reviews.
- **User Feed**: Implement a user feed to share user activity with friends.

#### Friends & User Profiles

- **User Searching**: Implement a search system that allows users to search for others.
- **Friends Requests**: Implement a request system that allows users to send friend requests, accept them and reject them.
- **Direct Messaging**: Implement a direct messaging system that allows users to communicate in real time with friends.
- **Book Clubs**: Allow users to create groups / "book clubs" of up to 10 members with group messaging.

#### Reading Incentivisation

- **Reading Challenges**: Implement reading challenges with rewards to incentivise users to read and use the application.
