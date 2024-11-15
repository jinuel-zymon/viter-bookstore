<?php
class Bestsellers
{
    public $bestsellers_aid;
    public $bestsellers_title;
    public $bestsellers_author;
    public $bestsellers_type;
    public $bestsellers_rank;
    public $bestsellers_genre;
    public $bestsellers_year;
    public $bestsellers_category;
    public $bestsellers_summary;
    public $bestsellers_price;
    public $bestsellers_photo;
    public $bestsellers_is_active;
    public $bestsellers_datetime;
    public $bestsellers_created;

    public $connection;
    public $lastInsertedId;

    public $tblBestsellers;

    public $bestsellers_start;
    public $bestsellers_total;
    public $bestsellers_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBestsellers = "books_bestsellers";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblBestsellers} ";
            $sql .= "( bestsellers_title, ";
            $sql .= "bestsellers_author, ";
            $sql .= "bestsellers_type, ";
            $sql .= "bestsellers_rank, ";
            $sql .= "bestsellers_genre, ";
            $sql .= "bestsellers_year, ";
            $sql .= "bestsellers_category, ";
            $sql .= "bestsellers_summary, ";
            $sql .= "bestsellers_price, ";
            $sql .= "bestsellers_photo, ";
            $sql .= "bestsellers_is_active, ";
            $sql .= "bestsellers_datetime, ";
            $sql .= "bestsellers_created ) values ( ";
            $sql .= ":bestsellers_title, ";
            $sql .= ":bestsellers_author, ";
            $sql .= ":bestsellers_type, ";
            $sql .= ":bestsellers_rank, ";
            $sql .= ":bestsellers_genre, ";
            $sql .= ":bestsellers_year, ";
            $sql .= ":bestsellers_category, ";
            $sql .= ":bestsellers_summary, ";
            $sql .= ":bestsellers_price, ";
            $sql .= ":bestsellers_photo, ";
            $sql .= ":bestsellers_is_active, ";
            $sql .= ":bestsellers_datetime, ";
            $sql .= ":bestsellers_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "bestsellers_title" => $this->bestsellers_title,
                "bestsellers_author" => $this->bestsellers_author,
                "bestsellers_type" => $this->bestsellers_type,
                "bestsellers_rank" => $this->bestsellers_rank,
                "bestsellers_genre" => $this->bestsellers_genre,
                "bestsellers_year" => $this->bestsellers_year,
                "bestsellers_category" => $this->bestsellers_category,
                "bestsellers_summary" => $this->bestsellers_summary,
                "bestsellers_price" => $this->bestsellers_price,
                "bestsellers_photo" => $this->bestsellers_photo,
                "bestsellers_is_active" => $this->bestsellers_is_active,
                "bestsellers_datetime" => $this->bestsellers_datetime,
                "bestsellers_created" => $this->bestsellers_created,
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
            $sql = "select * from {$this->tblBestsellers} ";
            $sql .= "order by bestsellers_is_active desc, ";
            $sql .= "bestsellers_rank asc ";
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
            $sql = "select * from {$this->tblBestsellers} ";
            $sql .= "order by bestsellers_is_active desc, ";
            $sql .= "bestsellers_title asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->bestsellers_start - 1,
                "total" => $this->bestsellers_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select * from {$this->tblBestsellers} ";
            $sql .= "where bestsellers_title like :bestsellers_title ";
            $sql .= "order by bestsellers_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "bestsellers_title" => "%{$this->bestsellers_search}%",
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
            $sql = "select * from {$this->tblBestsellers} ";
            $sql .= "where bestsellers_aid  = :bestsellers_aid ";
            $sql .= "order by bestsellers_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "bestsellers_aid" => $this->bestsellers_aid,
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
            $sql = "update {$this->tblBestsellers} set ";
            $sql .= "bestsellers_title = :bestsellers_title, ";
            $sql .= "bestsellers_author = :bestsellers_author, ";
            $sql .= "bestsellers_type = :bestsellers_type, ";
            $sql .= "bestsellers_rank = :bestsellers_rank, ";
            $sql .= "bestsellers_genre = :bestsellers_genre, ";
            $sql .= "bestsellers_year = :bestsellers_year, ";
            $sql .= "bestsellers_category = :bestsellers_category, ";
            $sql .= "bestsellers_summary = :bestsellers_summary, ";
            $sql .= "bestsellers_price = :bestsellers_price, ";
            $sql .= "bestsellers_photo = :bestsellers_photo, ";
            $sql .= "bestsellers_datetime = :bestsellers_datetime ";
            $sql .= "where bestsellers_aid = :bestsellers_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "bestsellers_title" => $this->bestsellers_title,
                "bestsellers_author" => $this->bestsellers_author,
                "bestsellers_type" => $this->bestsellers_type,
                "bestsellers_rank" => $this->bestsellers_rank,
                "bestsellers_genre" => $this->bestsellers_genre,
                "bestsellers_year" => $this->bestsellers_year,
                "bestsellers_category" => $this->bestsellers_category,
                "bestsellers_summary" => $this->bestsellers_summary,
                "bestsellers_price" => $this->bestsellers_price,
                "bestsellers_photo" => $this->bestsellers_photo,
                "bestsellers_datetime" => $this->bestsellers_datetime,
                "bestsellers_aid" => $this->bestsellers_aid,
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
            $sql = "update {$this->tblBestsellers} set ";
            $sql .= "bestsellers_is_active = :bestsellers_is_active, ";
            $sql .= "bestsellers_datetime = :bestsellers_datetime ";
            $sql .= "where bestsellers_aid = :bestsellers_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "bestsellers_is_active" => $this->bestsellers_is_active,
                "bestsellers_datetime" => $this->bestsellers_datetime,
                "bestsellers_aid" => $this->bestsellers_aid,
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
            $sql = "delete from {$this->tblBestsellers} ";
            $sql .= "where bestsellers_aid = :bestsellers_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "bestsellers_aid" => $this->bestsellers_aid,
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
            $sql = "select bestsellers_title from {$this->tblBestsellers} ";
            $sql .= "where bestsellers_title = :bestsellers_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "bestsellers_title" => "{$this->bestsellers_title}",
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
    //         $sql = "select product_bestsellers_id from {$this->tblBestsellers} ";
    //         $sql .= "where product_bestsellers_id = :product_bestsellers_id ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "product_bestsellers_id" => $this->bestsellers_aid,
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
            $sql .= "from {$this->tblBestsellers} ";
            $sql .= "where bestsellers_is_active = :bestsellers_is_active  ";
            $sql .= "order by bestsellers_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "bestsellers_is_active" => $this->bestsellers_is_active,
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
            $sql .= "from {$this->tblBestsellers} ";
            $sql .= "where ";
            $sql .= "bestsellers_is_active = :bestsellers_is_active ";
            $sql .= "and bestsellers_title like :bestsellers_title ";
            $sql .= "order by bestsellers_is_active desc, ";
            $sql .= "bestsellers_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "bestsellers_title" => "%{$this->bestsellers_search}%",
                "bestsellers_is_active" => $this->bestsellers_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}