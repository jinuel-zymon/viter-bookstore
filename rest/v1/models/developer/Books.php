<?php
class Books
{
    public $books_aid;
    public $books_title;
    public $books_author;
    public $books_type;
    public $books_genre;
    public $books_year;
    public $books_category;
    public $books_summary;
    public $books_price;
    public $books_photo;
    public $books_is_active;
    public $books_datetime;
    public $books_created;

    public $connection;
    public $lastInsertedId;

    public $tblBooks;

    public $books_start;
    public $books_total;
    public $books_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBooks = "books_books";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblBooks} ";
            $sql .= "( books_title, ";
            $sql .= "books_author, ";
            $sql .= "books_type, ";
            $sql .= "books_genre, ";
            $sql .= "books_year, ";
            $sql .= "books_category, ";
            $sql .= "books_summary, ";
            $sql .= "books_price, ";
            $sql .= "books_photo, ";
            $sql .= "books_is_active, ";
            $sql .= "books_datetime, ";
            $sql .= "books_created ) values ( ";
            $sql .= ":books_title, ";
            $sql .= ":books_author, ";
            $sql .= ":books_type, ";
            $sql .= ":books_genre, ";
            $sql .= ":books_year, ";
            $sql .= ":books_category, ";
            $sql .= ":books_summary, ";
            $sql .= ":books_price, ";
            $sql .= ":books_photo, ";
            $sql .= ":books_is_active, ";
            $sql .= ":books_datetime, ";
            $sql .= ":books_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "books_title" => $this->books_title,
                "books_author" => $this->books_author,
                "books_type" => $this->books_type,
                "books_genre" => $this->books_genre,
                "books_year" => $this->books_year,
                "books_category" => $this->books_category,
                "books_summary" => $this->books_summary,
                "books_price" => $this->books_price,
                "books_photo" => $this->books_photo,
                "books_is_active" => $this->books_is_active,
                "books_datetime" => $this->books_datetime,
                "books_created" => $this->books_created,
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
            $sql = "select * from {$this->tblBooks} ";
            $sql .= "order by books_is_active desc, ";
            $sql .= "books_title asc ";
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
            $sql = "select * from {$this->tblBooks} ";
            $sql .= "order by books_is_active desc, ";
            $sql .= "books_title asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->books_start - 1,
                "total" => $this->books_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select * from {$this->tblBooks} ";
            $sql .= "where books_title like :books_title ";
            $sql .= "order by books_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "books_title" => "%{$this->books_search}%",
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
            $sql = "select * from {$this->tblBooks} ";
            $sql .= "where books_aid  = :books_aid ";
            $sql .= "order by books_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "books_aid" => $this->books_aid,
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
            $sql = "update {$this->tblBooks} set ";
            $sql .= "books_title = :books_title, ";
            $sql .= "books_author = :books_author, ";
            $sql .= "books_type = :books_type, ";
            $sql .= "books_genre = :books_genre, ";
            $sql .= "books_year = :books_year, ";
            $sql .= "books_category = :books_category, ";
            $sql .= "books_summary = :books_summary, ";
            $sql .= "books_price = :books_price, ";
            $sql .= "books_photo = :books_photo, ";
            $sql .= "books_datetime = :books_datetime ";
            $sql .= "where books_aid = :books_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "books_title" => $this->books_title,
                "books_author" => $this->books_author,
                "books_type" => $this->books_type,
                "books_genre" => $this->books_genre,
                "books_year" => $this->books_year,
                "books_category" => $this->books_category,
                "books_summary" => $this->books_summary,
                "books_price" => $this->books_price,
                "books_photo" => $this->books_photo,
                "books_datetime" => $this->books_datetime,
                "books_aid" => $this->books_aid,
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
            $sql = "update {$this->tblBooks} set ";
            $sql .= "books_is_active = :books_is_active, ";
            $sql .= "books_datetime = :books_datetime ";
            $sql .= "where books_aid = :books_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "books_is_active" => $this->books_is_active,
                "books_datetime" => $this->books_datetime,
                "books_aid" => $this->books_aid,
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
            $sql = "delete from {$this->tblBooks} ";
            $sql .= "where books_aid = :books_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "books_aid" => $this->books_aid,
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
            $sql = "select books_title from {$this->tblBooks} ";
            $sql .= "where books_title = :books_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "books_title" => "{$this->books_title}",
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
    //         $sql = "select product_books_id from {$this->tblBooks} ";
    //         $sql .= "where product_books_id = :product_books_id ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "product_books_id" => $this->books_aid,
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
            $sql .= "from {$this->tblBooks} ";
            $sql .= "where books_is_active = :books_is_active  ";
            $sql .= "order by books_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "books_is_active" => $this->books_is_active,
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
            $sql .= "from {$this->tblBooks} ";
            $sql .= "where ";
            $sql .= "books_is_active = :books_is_active ";
            $sql .= "and books_title like :books_title ";
            $sql .= "order by books_is_active desc, ";
            $sql .= "books_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "books_title" => "%{$this->books_search}%",
                "books_is_active" => $this->books_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}