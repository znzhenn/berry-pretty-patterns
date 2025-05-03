create database if not exists berry_pretty_patterns;
-- show databases;
use berry_pretty_patterns;
-- berry_user needs to exist first, not last so it has smth to reference

create table if not exists Berry_User(User_ID int auto_increment unique primary key, Email varchar(500), Username varchar(50), Password varchar(100),  
	Biography text, Craft_Preference set('Knitting','Crochet','General Crafts'), Pattern_Library_ID int);
    
create table if not exists Yarn(Yarn_ID int auto_increment unique primary key, Yarn_Brand varchar(75), Yarn_Weight int, Yarn_Color varchar (75), 
	Skeins_Available double, Dye_Lot varchar(25));
create table if not exists Yarn_Collection(Yarn_Collection_ID int unique, User_ID int,  Yarn_ID int,
	foreign key(Yarn_ID) references Yarn(Yarn_ID), foreign key(User_ID) references Berry_User(User_ID));
-- insert statement: yarn_collection_id can be generated //added based on user preference (add in a function for this later)

create table if not exists Materials_Required(Materials_Required_ID int auto_increment unique primary key, Hook_Size double, Needle_Size double, 
	Yarn_ID int,  Yarn_Quantity int, Scissors_Needed boolean,
    foreign key(Yarn_ID) references Yarn(Yarn_ID));
    -- storing (multiple) types of yarn?

create table if not exists Pattern_Instructions(Pattern_Instruction_ID int primary key, Instruction text);
create table if not exists Pattern(Pattern_ID int auto_increment unique primary key, Pattern_Name varchar(100), Description text, 
	Pattern_Difficulty enum('beginner friendly', 'intermediate', 'difficult'), Liked_Pattern boolean,
	Pattern_Instruction_ID int, Pattern_Type enum('Accessories','Wearables','Home Decor','Amigurumi'), Materials_Required_ID int,
    Additional_Information text,
    foreign key(Pattern_Instruction_ID) references Pattern_Instructions(Pattern_Instruction_ID),
    foreign key(Materials_Required_ID) references Materials_Required(Materials_Required_ID));
    
create table if not exists Pattern_Library(Pattern_Library_ID int auto_increment unique primary key, Pattern_ID int, 
	foreign key(Pattern_ID) references Pattern(Pattern_ID));

show tables;

-- checks
describe berry_user;
describe materials_required;
describe pattern;
describe pattern_instructions;
describe pattern_library;
describe yarn;
describe yarn_collection;
    
-- favorite patterns (can be stored in a data structure after each pattern in the library) // "liked_pattern"