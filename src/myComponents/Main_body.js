import React from 'react'
export default function Header(props) {
    return (
        <div className="container my-4" >
            <form>
                <div className=" my-4">
                    <label for="exampleInputPassword1" className="form-label">Budget</label>
                    <input type="number" className="form-control" id="Budget" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className=" my-4">
                    <label for="exampleInputPassword1" className="form-label">Use</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Select your Primary Usege</option>
                        <option value="1">Gamming</option>
                        <option value="2">Official Work</option>
                        <option value="3">Schooling</option>
                        <option value="4">Day to doy use</option>

                    </select>
                </div>

                <button type="submit" className="btn btn-sm btn-success">Get PC</button>
            </form>
        </div>

    )
}