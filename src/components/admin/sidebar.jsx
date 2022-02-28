import React from 'react'
import { Link } from "react-router-dom";
export default function sidebar() {
    return (
        <ul>
            <li>
                <Link to="/admin/users">Users</Link>
            </li>
            <li>
                <Link to="/admin/posts">Posts</Link>
            </li>
        </ul>
    )
}
