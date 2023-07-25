import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogService from "../services/blogs";
import userService from "../services/user";

const ProfileScreen = () => {
  let { id } = useParams();
  const [user, setUser] = useState({});
  const [userBlogs, setUserBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await userService.getUser(id);
        setUser(user);

        const blogs = await blogService.getAll();
        setUserBlogs(blogs.filter((blog) => user.blogs.includes(blog.id)));
      } catch (error) {
        console.log("erreur:", error);
      }
    };
   
    fetchData();
  }, [id]);

  console.log(user);
  console.log("user blogs", userBlogs);
  return <div>
    
    <span>{user.name}</span>
    <ul>
            {userBlogs.map((blog, index) => (
              <Link to={`/lesson/${blog.id}`}>
                <li
                  key={index}
                  className="flex items-center justify-between mb-4 p-4 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl"
                >
                  {blog.title}
                </li>
              </Link>
            ))}
          </ul>

    </div>
};

export default ProfileScreen;
