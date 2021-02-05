<?php
include_once 'DbConnection.php';
include_once 'userModel.php';
class UserMapper{
    private $user;
    private $connection;
    public function __construct($user){
        $obj = new DBConnection();
        $this->$connection = $obj->getConnection();
        $this->user=$user;
       
    }
    public function Insert($UserName, $UserEmail, $UserUsername, $UserPassword){
        $sql = "INSERT INTO User (UserName,UserEmail,UserUsername,UserPassword)
         VALUES (:UserName,:UserEmail,:UserUsername,UserPassword)";
         $statement = $this->connection->prepare($sql);
         $statement->bindParam(":UserName",$UserName());
         $statement->bindParam(":UserEmail", $UserEmail);
         $statement->bindParam(":UserUsername", $UserUsername());
         $statement->bindParam(":UserPassword", $UserPasswor());
 
            $statement->execute();
         
}
}