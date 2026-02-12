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
import { ThumbsUp, ThumbsDown, BadgeCheck, Trash2, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";
import BlogsFormModal from "@/components/BlogsFormModal";
import { showErrorToast } from "@/lib/toast";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  image: string;
  likes: number;
  dislikes: number;
  verified: boolean;
}

export default function BlogData() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/getBlogs`);
        // console.log("Blogs Data:", res.data.message || res.data);
        const blogsArray = Array.isArray(res.data.message)
          ? res.data.message
          : [];
        setBlogs(blogsArray);
      } catch (error: any) {
        // console.error(
        //   "Error fetching blogs:",
        //   error.response?.data || error.message,
        // );
        showErrorToast("Failed to load blogs!");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const react = (id: string, type: "like" | "dislike") => {
    setBlogs((prev) =>
      prev.map((b) => {
        if (b._id !== id) return b;
        return {
          ...b,
          likes: type === "like" ? b.likes + 1 : b.likes,
          dislikes: type === "dislike" ? b.dislikes + 1 : b.dislikes,
        };
      }),
    );
  };

  const deleteBlog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axios.delete(`${BASE_URL}/deleteBlog/${id}`);
      // Remove deleted blog from state
      setBlogs((prev) => prev.filter((b) => b._id !== id));
      alert("Blog deleted successfully");
    } catch (error: any) {
      console.error(
        "Error deleting blog:",
        error.response?.data || error.message,
      );
      alert("Failed to delete blog");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Loading blogs...
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-6 px-4 lg:px-12 bg-gradient-to-b from-background to-muted/30">
      <Button onClick={() => setOpen(true)} size="sm" variant="default" className="flex items-center gap-1">
        <Edit className="w-4 h-4" /> Add new Blog
      </Button>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {blogs.map((blog, i) => (
          <motion.div
            key={blog._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -8 }}
            className="rounded-2xl bg-card border border-border shadow-md hover:shadow-xl overflow-hidden flex flex-col relative"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-52 w-full object-cover"
            />

            <div className="p-5 flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg line-clamp-2">
                  {blog.title}
                </h3>
                {blog.verified && (
                  <BadgeCheck className="text-green-500 w-5 h-5" />
                )}
              </div>

              <p className="text-sm text-muted-foreground line-clamp-3">
                {blog.content}
              </p>

              <span className="text-xs text-muted-foreground">
                By {blog.author}
              </span>

              <div className="flex items-center justify-between mt-auto">
                {/* <div className="flex gap-3">
                  <Button size="sm" variant="secondary" onClick={() => react(blog._id, "like")}>
                    <ThumbsUp className="w-4 h-4 mr-1" /> {blog.likes}
                  </Button>
                  <Button size="sm" variant="secondary" onClick={() => react(blog._id, "dislike")}>
                    <ThumbsDown className="w-4 h-4 mr-1" /> {blog.dislikes}
                  </Button>
                </div> */}

                {/* Delete Button */}
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => deleteBlog(blog._id)}
                  className="flex items-center gap-1"
                >
                  <Trash2 className="w-4 h-4" /> Delete
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
       <BlogsFormModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
