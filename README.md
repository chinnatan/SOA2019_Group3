<p align="center">
   <img src="https://github.com/chinnatan/SOA2019_Group3/blob/master/markdown-here/images/logo-eleaving-with-text.png" width="395" height="107">
</p>
<h1 align="center">
   SOA2019 GROUP III
</h1>

# ✦ SERVICE
| <p align="center">Service Name</p>  | <p align="center">Completely</p>  |
| ------------- | ------------- |
| <p align="center"> Auth Service </p>  |<p align="center"> :+1: </p>  |
| <p align="center"> User Service </p>  | <p align="center"> :+1: </p>  |
| <p align="center"> Subject Service </p>  | <p align="center"> :+1: </p>  |
| <p align="center"> Leave Service </p>  | <p align="center"> :+1: </p>  |

หมายเหตุ: :+1: = เสร็จแล้ว ,:-1: = อยู่ในระหว่างปฎิบัติงาน

# ✦ HOW TO RUN SERVICE
## Clone Project
```
git clone https://github.com/chinnatan/SOA2019_Group3.git
cd eleaving/backend
```
## COMPILE & RUN
> Auth Service
```
cd AuthService
node server.js
```
> User Service
```
cd UserService
node server.js
```
> Subject Service
```
cd SubjectService
node server.js
```
> Leave Service
```
cd LeaveService
node server.js
```
# ✦ TEST
> Auth Service
```
cd AuthService
npm test
```
> User Service
```
cd UserService
npm test
```
> Subject Service
```
cd SubjectService
npm test
```
> Leave Service
```
cd LeaveService
npm test
```
# ✦ DEPLOY WITH API GATEWAY
```
http://35.240.188.199:3001/{Endpoint following next section}
```
# ✦ API & ENDPOINT WITH API GATEWAY [![](https://img.shields.io/badge/swagger-api%20document-blue.svg)](https://app.swaggerhub.com/apis/chinnatan/Eleaving/1.0.0)
## AUTH SERVICE
| Endpoint |
|--|
| `POST` /api/auth/login      |
## USER SERVICE
| Endpoint |
|--|
| `GET` /api/user      |
| `GET` /api/user/:userid|
| `GET` /api/user/:userid/student|
## SUBJECT SERVICE
| Endpoint |
|--|
| `GET` /api/subject      |
| `GET` /api/subject/user/:userid|
| `GET` /api/subject/user/:userid/professor|
## LEAVE SERVICE
| Endpoint |
|--|
| `GET` /api/leave      |
| `GET` /api/leave/:leaveid|
| `GET` /api/leave/user/:userid/status|
| `GET` /api/leave/:userid/count      |
| `GET` /api/leave/uploads/:filename|
| `POST` /api/leave/sick/send|
| `POST` /api/leave/personal/send|
| `POST` /api/leave/status/update|
