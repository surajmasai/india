import React, { useEffect, useState } from 'react'

export const Doctors = () => {

    const [database, setDatabase] = useState([]);
    const [rating, setRating] = useState(0);
    const [search, setSearch] = useState("");
    const [filterspecial, setFilterspecial] = useState("");



    useEffect(() => {

        fetch("http://localhost:4000/doc")
            .then((res) => res.json())
            .then((res) => setDatabase(res.doctor))
            .catch((err) => console.error(err))
    }, [])

    const onSearchChange = (e) => {
        setSearch(e.target.value);
    };


    return (
        <div>
            <h1>Doctors</h1>
            <div>
                <h4>filter by rating</h4>
                <button onClick={() => setRating(0)}>clear</button>
                <button onClick={() => setRating(1)}>rating 1</button>
                <button onClick={() => setRating(2)}>rating 2</button>
                <button onClick={() => setRating(3)}>rating 3</button>
                <button onClick={() => setRating(4)}>rating 4</button>
                <button onClick={() => setRating(5)}>rating 5</button>
                <hr />
            </div>
            <div>
                <h4>filter by speciality</h4>
                <button onClick={() => setFilterspecial("")}>clear</button>
                <button onClick={() => setFilterspecial("Dentist")}>Dentist</button>
                <button onClick={() => setFilterspecial("Bone")}>Bone</button>
                <button onClick={() => setFilterspecial("General Physician")}>General Physician</button>
                <button onClick={() => setFilterspecial("Gynecologist")}>Gynecologist</button>
                <hr />
            </div >
            <div>
                <p>Search by Name and Speciality</p>
                <input
                    placeholder="Search by speciality, Name"
                    onChange={onSearchChange}
                />
                <hr />
            </div>

            {
                database.filter((e) => {
                    if (rating === 0) {
                        return database
                    } else {
                        return e.rating >= rating && e.rating < rating + 1
                    }
                }).filter((e) => {
                    if (filterspecial === "") {
                        return database
                    } else {
                        return e.speciality.toLowerCase() === filterspecial.toLowerCase()
                    }
                })
                    .filter((e) => {
                        if (search === "") {
                            return database;
                        } else {
                            return e.name.toLowerCase().includes(search.toLowerCase()) || e.speciality.toLowerCase().includes(search.toLocaleLowerCase());
                        }

                    })
                    .map((e, i) => {
                        return (
                            <div key={i}>
                                <img src={e.profilePic} alt={e.name} />
                                <h3>Name:- {e.name}</h3>
                                <h5>Speciality:- {e.speciality}</h5>
                                <h5>Rate:- {e.rating}</h5>
                            </div>
                        )
                    })
            }
        </div>
    )
}
