<?php
class User
{
   
    private $UserName;
    private $UserEmail;
    private $UserUsername;
    private $UserPassword;
    public function __construct($UserName,$UserEmail, $UserUsername,$UserPassword)
    {
        $this->$UserName = $UserName;
        $this->$UserEmail = $UserEmail;
        $this->$UserUsername = $UserUsername;
        $this->$UserPassword = $UserPassword;

    }
    public function getUserName()
    {
        return $this->UserName;
    }
    public function getUserEmail()
    {
        return $this->UserEmail;
    }
    public function getUserUsername()
    {
        return $this->UserUsername;
    }
    public function getUserPassword()
    {
        return $this->UserPassword;
    }
   
    public function setUserName($name)
    {
        $this->UserName = $name;
    }
    public function setUserEmail($email)
    {
        $this->UserEmail= $email;
    }
    public function setUserUsername($username)
    {
        $this->UserUsername = $name;
    }
    public function setUserPassword($password)
    {
        $this->UserPassword= $password;
    }
}
?>