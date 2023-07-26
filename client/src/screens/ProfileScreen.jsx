import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogService from "../services/blogs";
import userService from "../services/user";
import Card from "../components/Card";

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

  return (
    <div className="p-4">
      <span className="text-xl">{user.name}</span>
      <div className="py-4 flex gap-4">
        {userBlogs.map((blog, index) => (
          <Link key={blog.id} to={`/lesson/${blog.id}`}>
            <Card title={blog.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileScreen;
