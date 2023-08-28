-- database 인코딩 다시 정의해서 생성
show databases;
drop database sesac;
-- 이모지, 특수 문자를 사용할 수 있는 인코딩
create database sesac character set utf8mb4 collate utf8mb4_unicode_ci;
use sesac;
CREATE TABLE visitor (
  id INT PRIMARY KEY auto_increment,
  name VARCHAR(10) NOT NULL,
  comment MEDIUMTEXT
);
desc visitor;
INSERT INTO visitor (name, comment) VALUES("홍길동", "내가 왔다.");
INSERT INTO visitor (name, comment) VALUES("이찬혁", "으라차차");
INSERT INTO visitor (name, comment) VALUES("이수현", "안뇽뇽");
insert into visitor values(null,'sean','hi')
select * from visitor;
-- user 라는 새로운 계정(mysql 접속 가능한 계정) 생성
create user 'user'@'%' identified with mysql_native_password by '1234';
-- user 계정에 대해서 모든 권한 부여 = (DCL 중에서 grant)
grant all privileges on *.* to 'user'@'%' with grant option;
-- mysql 캐시 새로고침
flush privileges;
-- mysql 데이터베이스의 user 테이블에서 새로 생성된 "user" 계정 확인 가능
show databases;
select * from mysql.user;