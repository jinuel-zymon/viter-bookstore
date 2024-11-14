<?php
class Booktype
{
    public $booktype_aid;
    public $booktype_title;

    public $booktype_is_active;
    public $booktype_datetime;
    public $booktype_created;

    public $connection;
    public $lastInsertedId;

    public $tblBooktype;

    public $booktype_start;
    public $booktype_total;
    public $booktype_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBooktype = "books_settings_booktype";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblBooktype} ";
            $sql .= "( booktype_title, ";
            $sql .= "booktype_is_active, ";
            $sql .= "booktype_datetime, ";
            $sql .= "booktype_created ) values ( ";
            $sql .= ":booktype_title, ";
            $sql .= ":booktype_is_active, ";
            $sql .= ":booktype_datetime, ";
            $sql .= ":booktype_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booktype_title" => $this->booktype_title,
                "booktype_is_active" => $this->booktype_is_active,
                "booktype_datetime" => $this->booktype_datetime,
                "booktype_created" => $this->booktype_created,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select * from {$this->tblBooktype} ";
            $sql .= "order by booktype_is_active desc, ";
            $sql .= "booktype_title asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read limit
    public function readLimit()
    {
        try {
            $sql = "select * from {$this->tblBooktype} ";
            $sql .= "order by booktype_is_active desc, ";
            $sql .= "booktype_title asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->booktype_start - 1,
                "total" => $this->booktype_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select * from {$this->tblBooktype} ";
            $sql .= "where booktype_title like :booktype_title ";
            $sql .= "order by booktype_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booktype_title" => "%{$this->booktype_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblBooktype} ";
            $sql .= "where booktype_aid  = :booktype_aid ";
            $sql .= "order by booktype_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booktype_aid" => $this->booktype_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tblBooktype} set ";
            $sql .= "booktype_title = :booktype_title, ";
            $sql .= "booktype_datetime = :booktype_datetime ";
            $sql .= "where booktype_aid = :booktype_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booktype_title" => $this->booktype_title,
                "booktype_datetime" => $this->booktype_datetime,
                "booktype_aid" => $this->booktype_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // active
    public function active()
    {
        try {
            $sql = "update {$this->tblBooktype} set ";
            $sql .= "booktype_is_active = :booktype_is_active, ";
            $sql .= "booktype_datetime = :booktype_datetime ";
            $sql .= "where booktype_aid = :booktype_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booktype_is_active" => $this->booktype_is_active,
                "booktype_datetime" => $this->booktype_datetime,
                "booktype_aid" => $this->booktype_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblBooktype} ";
            $sql .= "where booktype_aid = :booktype_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booktype_aid" => $this->booktype_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // name
    public function checkName()
    {
        try {
            $sql = "select booktype_title from {$this->tblBooktype} ";
            $sql .= "where booktype_title = :booktype_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booktype_title" => "{$this->booktype_title}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // // name
    // public function checkAssociation()
    // {
    //     try {
    //         $sql = "select product_booktype_id from {$this->tblBooktype} ";
    //         $sql .= "where product_booktype_id = :product_booktype_id ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "product_booktype_id" => $this->booktype_aid,
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }


    public function filterByStatus()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblBooktype} ";
            $sql .= "where booktype_is_active = :booktype_is_active  ";
            $sql .= "order by booktype_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booktype_is_active" => $this->booktype_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterByStatusAndSearch()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblBooktype} ";
            $sql .= "where ";
            $sql .= "booktype_is_active = :booktype_is_active ";
            $sql .= "and booktype_title like :booktype_title ";
            $sql .= "order by booktype_is_active desc, ";
            $sql .= "booktype_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booktype_title" => "%{$this->booktype_search}%",
                "booktype_is_active" => $this->booktype_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}