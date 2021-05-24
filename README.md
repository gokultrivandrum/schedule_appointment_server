# Appointment Scheduler
Appointment scheduler is an application for scheduling appointments for future dates. Users were able to select a time slot and can mark the appointment in different colours to distinguish each appointment. Users were restricted to select a slot for the same date and time by showing a warning message. Users can edit and delete the existing appointments.

Application scheduler application is powered by serverless framework for deployment and Frontend developed in Next JS Framework with Typescript, Redux, Jest, integrated with Express JS as the server with Mongoose as middleware and MongoDB for storage.

The application can be accessed through the below URLs

Serverless Deployment: 
https://dhv0nri4as4wa.cloudfront.net/

Vercel (Next JS) auto-deployment using git hook:  
https://schedule-appointment-fnuaty9km-gokultrivandrum.vercel.app/

Application code base maintained in GitHub repository 

Appointment Scheduler Repo: https://github.com/gokultrivandrum/schedule_appointment

Server Repo: https://github.com/gokultrivandrum/schedule_appointment_server

## Prerequisite for running the application
NPM

Node

MongoDB Credentials

Serverless credential (Deployment)

AWS console credential (Deployment)

## For Running a Backend application follow the below steps

git clone https://github.com/gokultrivandrum/schedule_appointment.git

cd schedule_appointment

npm install

In the ‘database.config.js’ file configure the mongo URL

npm run start // to host the server in http://localhost:3005

setx AWS_ACCESS_KEY_ID XXXXXX

setx AWS_SECRET_ACCESS_KEY XXXXX

serverless deploy // for deployment

serverless remove // to remove the command
 
# Future Road Map

User persona to manage the appointments.

Server migration to Next.js API folder

Test case coverage for all the components, now integrated only