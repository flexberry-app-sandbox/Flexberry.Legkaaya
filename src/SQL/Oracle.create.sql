﻿



CREATE TABLE "Животные"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерЖивотного" NUMBER(10) NULL,

	"Кличка" NVARCHAR2(255) NULL,

	"Сотрудник" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должность"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодДолжности" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Расписание"
(

	"primaryKey" RAW(16) NOT NULL,

	"ВремяУборки" NVARCHAR2(255) NULL,

	"ВремяКормления" NVARCHAR2(255) NULL,

	"Корм" RAW(16) NOT NULL,

	"Животные" RAW(16) NOT NULL,

	"Клетка" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Вид"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сведения"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Клетка" RAW(16) NOT NULL,

	"Вид" RAW(16) NOT NULL,

	"Животные" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудник"
(

	"primaryKey" RAW(16) NOT NULL,

	"ТабНомер" NUMBER(10) NULL,

	"Фамилия" NVARCHAR2(255) NULL,

	"Имя" NVARCHAR2(255) NULL,

	"Отчество" NVARCHAR2(255) NULL,

	"Должность" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Клетка"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерКлетки" NUMBER(10) NULL,

	"Тип" NVARCHAR2(255) NULL,

	"Площадь" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Корм"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодКорма" NUMBER(10) NULL,

	"Название" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Животные"
	ADD CONSTRAINT "Животные_FСот_8957" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "Животные_IСот_8519" on "Животные" ("Сотрудник");

ALTER TABLE "Расписание"
	ADD CONSTRAINT "Расписание_FК_6881" FOREIGN KEY ("Корм") REFERENCES "Корм" ("primaryKey");

CREATE INDEX "Расписание_IКорм" on "Расписание" ("Корм");

ALTER TABLE "Расписание"
	ADD CONSTRAINT "Расписание_FЖ_8745" FOREIGN KEY ("Животные") REFERENCES "Животные" ("primaryKey");

CREATE INDEX "Расписание_IЖ_9226" on "Расписание" ("Животные");

ALTER TABLE "Расписание"
	ADD CONSTRAINT "Расписание_FК_5560" FOREIGN KEY ("Клетка") REFERENCES "Клетка" ("primaryKey");

CREATE INDEX "Расписание_IК_4806" on "Расписание" ("Клетка");

ALTER TABLE "Сведения"
	ADD CONSTRAINT "Сведения_FКле_6652" FOREIGN KEY ("Клетка") REFERENCES "Клетка" ("primaryKey");

CREATE INDEX "Сведения_IКлетка" on "Сведения" ("Клетка");

ALTER TABLE "Сведения"
	ADD CONSTRAINT "Сведения_FВид_0" FOREIGN KEY ("Вид") REFERENCES "Вид" ("primaryKey");

CREATE INDEX "Сведения_IВид" on "Сведения" ("Вид");

ALTER TABLE "Сведения"
	ADD CONSTRAINT "Сведения_FЖив_6473" FOREIGN KEY ("Животные") REFERENCES "Животные" ("primaryKey");

CREATE INDEX "Сведения_IЖиво_311" on "Сведения" ("Животные");

ALTER TABLE "Сотрудник"
	ADD CONSTRAINT "Сотрудник_FДо_9849" FOREIGN KEY ("Должность") REFERENCES "Должность" ("primaryKey");

CREATE INDEX "Сотрудник_IДо_2523" on "Сотрудник" ("Должность");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


