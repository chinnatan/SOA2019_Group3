# E - Leaving : ระบบลาเรียนออนไลน์
#### SOA'61 Project Group III
##### Simple Workflow
![alt img](https://github.com/chinnatan/SOA2019_Group3/blob/master/markdown-here/workflow/Flow%20-%20%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%A7%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B3%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%AB%E0%B8%A1%E0%B8%94.png)
##### ระบบลาเรียนออนไลน์คืออะไร ?
ระบบลาเรียนออนไลน์คือระบบที่ช่วยอำนวยความสะดวกให้นักศึกษาสามารถลาเรียนได้จากทุกที่ทุกเวลาโดยนักศึกษาจำเป็นต้องมี internet เพื่อใช้งาน
## How to run Service
First step, Clone project from github
```
git clone https://github.com/chinnatan/SOA2019_Group3.git
cd eleaving/backend
```

Second step, Compile & Run
> Leave Service
```
cd LeaveService
node app.js
```
> Subject Service
```
cd SubjectService
node app.js
```
> User Service
```
cd UserService
node app.js
```

Final, Test
> Leave Service
```
cd LeaveService
npm test
```
> Subject Service
```
cd SubjectService
npm test
```
> User Service
```
cd UserService
npm test
```

## API & Endpoints
### Leave Service
| Endpoint URL |
|---|
|`GET /leave`|
|`GET /leave/:leaveid:`|
|`GET /leave/:leaveid:/status`|
|`POST /leave/sick/send`|
|`POST /leave/personal/send`|
#### หมายเหตุ 
- `GET /leave/:leaveid` ข้อมูลสมมุติ (leaveid) -> "sl001", "pn001"
- `POST /leave/sick/send`
   - JSON (Use `Postman`)
   ```
   {
      "leavedocumentid": "sl002",
      "leavedocumentcategory": "ลาป่วย",
      "leavedocumentdate": "26/03/2562",
      "firstname": "ชินธันย์",
      "lastname": "ชาติทอง",
      "studentid": "59070040",
      "term": 2,
      "schoolyear": 2561,
      "studentyear": 3,
      "studentgeneration": 14,
      "studentbranch": "Information Technology",
      "studentdegree": "ปริญญาตรี",
      "description": "ลำไส้อักเสบ",
      "namedocument": [
          {
              "namedocumentid": 1,
              "filename": "ใบรับรองแพทย์"
          }
      ],
      "startleavedate": "25/03/2562",
      "endleavedate": "25/03/2562",
      "totaldate": 1,
      "subjectlist": [
          {
              "id": "60123",
              "name": "SOA",
              "section": 1,
              "professor": "Somkiat",
              "status": "รออนุมัติ"
          },
          {
              "id": "60124",
              "name": "SVAV",
              "section": 1,
              "professor": "Somkiat Wa.",
              "status": "รออนุมัติ"
          },
          {
              "id": "60125",
              "name": "LIB",
              "section": 601,
              "professor": "Chutima",
              "status": "อนุมัติ"
          }
      ]
    }
   ```
- `POST /leave/personal/send`
   - JSON (Use `Postman`)
   ```
   {
      "leavedocumentid": "pn002",
      "leavedocumentcategory": "ลากิจ",
      "leavedocumentdate": "26/03/2562",
      "firstname": "ชินธันย์",
      "lastname": "ชาติทอง",
      "studentid": "59070040",
      "term": 2,
      "schoolyear": 2561,
      "studentyear": 3,
      "studentgeneration": 14,
      "studentbranch": "Information Technology",
      "studentdegree": "ปริญญาตรี",
      "description": "ไปทำธุระต่างจังหวัด",
      "namedocument": [
          {
              
          }
      ],
      "startleavedate": "25/03/2562",
      "endleavedate": "25/03/2562",
      "totaldate": 1,
      "subjectlist": [
          {
              "id": "60123",
              "name": "SOA",
              "section": 1,
              "professor": "Somkiat",
              "status": "รออนุมัติ"
          },
          {
              "id": "60124",
              "name": "SVAV",
              "section": 1,
              "professor": "Somkiat Wa.",
              "status": "รออนุมัติ"
          },
          {
              "id": "60125",
              "name": "LIB",
              "section": 601,
              "professor": "Chutima",
              "status": "อนุมัติ"
          }
      ]
    }
   ```
 
### Subject Service
| Endpoint URL |
|---|
|`GET /subjects/user/:userid`|
#### หมายเหตุ 
- `GET /subjects/user/:userid` ข้อมูลสมมุติ (userid) -> "1", "2"
### User Service
| Endpoint URL |
|---|
|`GET /user/:userid`|
#### หมายเหตุ 
- `GET /user/:userid` ข้อมูลสมมุติ (userid) -> "1"
