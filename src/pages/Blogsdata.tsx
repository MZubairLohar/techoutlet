// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ThumbsUp, ThumbsDown, BadgeCheck, Trash2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { BASE_URL } from "@/Base_URL/Base_URL";

// interface Blog {
//   _id: string;
//   title: string;
//   content: string;
//   author: string;
//   image: string;
//   likes: number;
//   dislikes: number;
//   verified: boolean;
// }

// export default function BlogData() {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await axios.get(`${BASE_URL}/getBlogs`);
//         console.log("Blogs Data:", res.data.message || res.data);
//         const blogsArray = Array.isArray(res.data.message) ? res.data.message : [];
//         setBlogs(blogsArray);
//       } catch (error: any) {
//         console.error("Error fetching blogs:", error.response?.data || error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   const react = (id: string, type: "like" | "dislike") => {
//     setBlogs((prev) =>
//       prev.map((b) => {
//         if (b._id !== id) return b;
//         return {
//           ...b,
//           likes: type === "like" ? b.likes + 1 : b.likes,
//           dislikes: type === "dislike" ? b.dislikes + 1 : b.dislikes,
//         };
//       })
//     );
//   };

//   const deleteBlog = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this blog?")) return;

//     try {
//       await axios.delete(`${BASE_URL}/deleteBlog/${id}`);
//       // Remove deleted blog from state
//       setBlogs((prev) => prev.filter((b) => b._id !== id));
//       alert("Blog deleted successfully");
//     } catch (error: any) {
//       console.error("Error deleting blog:", error.response?.data || error.message);
//       alert("Failed to delete blog");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
//         Loading blogs...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen pt-28 px-4 lg:px-12 bg-gradient-to-b from-background to-muted/30">
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogs.map((blog, i) => (
//           <motion.div
//             key={blog._id}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.05 }}
//             whileHover={{ y: -8 }}
//             className="rounded-2xl bg-card border border-border shadow-md hover:shadow-xl overflow-hidden flex flex-col relative"
//           >
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="h-52 w-full object-cover"
//             />

//             <div className="p-5 flex flex-col gap-3 flex-1">
//               <div className="flex items-center justify-between">
//                 <h3 className="font-semibold text-lg line-clamp-2">{blog.title}</h3>
//                 {blog.verified && <BadgeCheck className="text-green-500 w-5 h-5" />}
//               </div>

//               <p className="text-sm text-muted-foreground line-clamp-3">{blog.content}</p>

//               <span className="text-xs text-muted-foreground">By {blog.author}</span>

//               <div className="flex items-center justify-between mt-auto">
//                 {/* <div className="flex gap-3">
//                   <Button size="sm" variant="secondary" onClick={() => react(blog._id, "like")}>
//                     <ThumbsUp className="w-4 h-4 mr-1" /> {blog.likes}
//                   </Button>
//                   <Button size="sm" variant="secondary" onClick={() => react(blog._id, "dislike")}>
//                     <ThumbsDown className="w-4 h-4 mr-1" /> {blog.dislikes}
//                   </Button>
//                 </div> */}

//                 {/* Delete Button */}
//                 <Button
//                   size="sm"
//                   variant="destructive"
//                   onClick={() => deleteBlog(blog._id)}
//                   className="flex items-center gap-1"
//                 >
//                   <Trash2 className="w-4 h-4" /> Delete
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }









import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ThumbsUp, 
  ThumbsDown, 
  BadgeCheck, 
  Trash2, 
  Plus,
  Calendar,
  User,
  FileText,
  Image as ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";
import BlogsFormModal from "@/components/BlogsFormModal";
import { showErrorToast, showSuccessToast } from "@/lib/toast";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  image: string;
  likes: number;
  dislikes: number;
  verified: boolean;
  createdAt?: string;
}

export default function BlogData() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    verified: 0,
    totalLikes: 0
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/getBlogs`);
        const blogsArray = Array.isArray(res.data.message)
          ? res.data.message
          : [];
        setBlogs(blogsArray);
        
        // Calculate stats
        setStats({
          total: blogsArray.length,
          verified: blogsArray.filter((b: Blog) => b.verified).length,
          totalLikes: blogsArray.reduce((acc, b: Blog) => acc + b.likes, 0)
        });
      } catch (error: any) {
        showErrorToast("Failed to load blogs!");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const react = async (id: string, type: "like" | "dislike") => {
    try {
      await axios.post(`${BASE_URL}/react/${id}`, { type });
      
      setBlogs((prev) =>
        prev.map((b) => {
          if (b._id !== id) return b;
          return {
            ...b,
            likes: type === "like" ? b.likes + 1 : b.likes,
            dislikes: type === "dislike" ? b.dislikes + 1 : b.dislikes,
          };
        })
      );
      
      showSuccessToast(`${type === "like" ? "Liked" : "Disliked"} successfully!`);
    } catch (error) {
      showErrorToast("Failed to react!");
    }
  };

  const deleteBlog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axios.delete(`${BASE_URL}/deleteBlog/${id}`);
      setBlogs((prev) => prev.filter((b) => b._id !== id));
      showSuccessToast("Blog deleted successfully");
    } catch (error: any) {
      showErrorToast("Failed to delete blog");
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Recently";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage and monitor all blog posts
            </p>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Plus size={20} />
            Add New Blog
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-red-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Blogs</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.total}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <FileText className="text-red-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-green-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Verified Blogs</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.verified}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <BadgeCheck className="text-green-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-blue-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Likes</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalLikes}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <ThumbsUp className="text-blue-600" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs Grid */}
      {blogs.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-200 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 bg-gray-100">
                {blog.image ? (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon className="text-gray-300" size={48} />
                  </div>
                )}
                
                {/* Verified Badge */}
                {blog.verified && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white p-1.5 rounded-full">
                    <BadgeCheck size={16} />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 mb-2">
                  {blog.title}
                </h3>

                {/* Author & Date */}
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <User size={12} />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{formatDate(blog.createdAt)}</span>
                  </div>
                </div>

                {/* Content Preview */}
                <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-1">
                  {blog.content}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  {/* Like/Dislike Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => react(blog._id, "like")}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-red-50 text-gray-700 hover:text-red-600 transition"
                    >
                      <ThumbsUp size={16} />
                      <span className="text-sm font-medium">{blog.likes}</span>
                    </button>
                    <button
                      onClick={() => react(blog._id, "dislike")}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-red-50 text-gray-700 hover:text-red-600 transition"
                    >
                      <ThumbsDown size={16} />
                      <span className="text-sm font-medium">{blog.dislikes}</span>
                    </button>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteBlog(blog._id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
                  >
                    <Trash2 size={16} />
                    <span className="text-sm font-medium">Delete</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        // Empty State
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <div className="flex flex-col items-center max-w-md mx-auto">
            <div className="bg-red-50 p-4 rounded-full mb-4">
              <FileText className="text-red-600" size={48} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No blogs yet</h3>
            <p className="text-gray-500 mb-6">
              Get started by creating your first blog post. Share your knowledge and insights with your audience.
            </p>
            <Button
              onClick={() => setOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg flex items-center gap-2"
            >
              <Plus size={20} />
              Create Your First Blog
            </Button>
          </div>
        </div>
      )}

      {/* Create Blog Modal */}
      <BlogsFormModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}