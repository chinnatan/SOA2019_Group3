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
> หมายเหตุ : ข้อมูลสมมุติ (leaveid) -> "SL001", "SL002"
### Subject Service
| Endpoint URL |
|---|
|`GET /subjects/:studentid:`|
> หมายเหตุ : ข้อมูลสมมุติ (studentid) -> "59070040", "59070042"
### User Service
| Endpoint URL |
|---|
|`GET /user`|
> หมายเหตุ : ข้อมูลสมมุติ (ดึงไว้แล้ว) -> "59070040"
