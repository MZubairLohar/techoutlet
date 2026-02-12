// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ThumbsUp, ThumbsDown, BadgeCheck, X } from "lucide-react";
// import { Button, Input } from "@/components/ui/button";

// import Navbar from "@/components/Navbar";
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

// export default function BlogPage() {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Modal state
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
//   const [reactionType, setReactionType] = useState<"like" | "dislike" | null>(null);
//   const [email, setEmail] = useState("");
//   const [modalLoading, setModalLoading] = useState(false);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await axios.get(`${BASE_URL}/getBlogs`);
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

//   const openReactionModal = (id: string, type: "like" | "dislike") => {
//     setSelectedBlogId(id);
//     setReactionType(type);
//     setModalOpen(true);
//   };

//   const submitReaction = async () => {
//     if (!email || !selectedBlogId || !reactionType) return;
//     setModalLoading(true);

//     try {
//       const res = await axios.put(`${BASE_URL}/likeDislike/${selectedBlogId}`, {
//         email,
//         type: reactionType,
//       });

//       const { likes, dislikes } = res.data.data;

//       // Update blog counts locally
//       setBlogs((prev) =>
//         prev.map((b) => {
//           if (b._id !== selectedBlogId) return b;
//           return { ...b, likes, dislikes };
//         })
//       );

//       setModalOpen(false);
//       setEmail("");
//       setSelectedBlogId(null);
//       setReactionType(null);
//     } catch (error: any) {
//       console.error("Error updating reaction:", error.response?.data || error.message);
//       alert("Failed to submit reaction");
//     } finally {
//       setModalLoading(false);
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
//       <Navbar />
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center mb-12"
//       >
//         <h1 className="text-4xl font-bold">Repair Tips & Blogs</h1>
//         <p className="text-muted-foreground mt-3">
//           Learn mobile care, maintenance & repair knowledge
//         </p>
//       </motion.div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogs.map((blog, i) => (
//           <motion.div
//             key={blog._id}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.05 }}
//             whileHover={{ y: -8 }}
//             className="rounded-2xl bg-card border border-border shadow-md hover:shadow-xl overflow-hidden flex flex-col"
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
//                 <div className="flex gap-3">
//                   <Button
//                     size="sm"
//                     variant="secondary"
//                     onClick={() => openReactionModal(blog._id, "like")}
//                   >
//                     <ThumbsUp className="w-4 h-4 mr-1" /> {blog.likes}
//                   </Button>
//                   <Button
//                     size="sm"
//                     variant="secondary"
//                     onClick={() => openReactionModal(blog._id, "dislike")}
//                   >
//                     <ThumbsDown className="w-4 h-4 mr-1" /> {blog.dislikes}
//                   </Button>
//                 </div>

//                 <Button size="sm">Read More</Button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Reaction Modal */}
//       {modalOpen && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-2xl w-full max-w-md relative">
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
//               onClick={() => setModalOpen(false)}
//             >
//               <X className="w-5 h-5" />
//             </button>
//             <h2 className="text-xl font-bold mb-4">
//               Enter your email to {reactionType}
//             </h2>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border p-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-primary"
//             />
//             <Button
//               onClick={submitReaction}
//               disabled={modalLoading || !email}
//               className="w-full"
//             >
//               {modalLoading ? "Submitting..." : "Submit"}
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }










import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown, BadgeCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { BASE_URL } from "@/Base_URL/Base_URL";
import { s } from "node_modules/vite/dist/node/types.d-aGj9QkWt";
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
  userReaction?: "like" | "dislike" | null; // track user reaction
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [expandedBlogId, setExpandedBlogId] = useState<string | null>(null);

  const [reactionType, setReactionType] = useState<"like" | "dislike" | null>(
    null,
  );
  const [email, setEmail] = useState("");
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/getBlogs`);
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

  const openReactionModal = (id: string, type: "like" | "dislike") => {
    setSelectedBlogId(id);
    setReactionType(type);
    setModalOpen(true);
  };

  const submitReaction = async () => {
  if (!email || !selectedBlogId || !reactionType) return;
  setModalLoading(true);

  try {
    const res = await axios.put(
      `${BASE_URL}/likeDislike/${selectedBlogId}`,
      {
        email,
        type: reactionType,
      }
    );

    const { likes, dislikes, userReaction } = res.data.data;

    // ✅ instant UI update
    setBlogs((prev) =>
      prev.map((b) =>
        b._id === selectedBlogId
          ? { ...b, likes, dislikes, userReaction }
          : b
      )
    );

    setModalOpen(false);
    setEmail("");
  } catch (error: any) {
    alert("Failed to submit reaction");
  } finally {
    setModalLoading(false);
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
    <div className="min-h-screen pt-28 px-4 lg:px-12 bg-gradient-to-b from-background to-muted/30">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold">Repair Tips & Blogs</h1>
        <p className="text-muted-foreground mt-3">
          Learn mobile care, maintenance & repair knowledge
        </p>
      </motion.div>

<div className="space-y-8">
  {blogs.map((blog, i) => {
    const isExpanded = expandedBlogId === blog._id;

    return (
      <motion.div
        key={blog._id}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.05 }}
        className="rounded-2xl bg-card border border-border shadow-md hover:shadow-xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Image LEFT */}
        <img
          src={blog.image}
          alt={blog.title}
          className="md:w-64 h-52 md:h-auto object-cover"
        />

        {/* Content RIGHT */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xl">{blog.title}</h3>
            {blog.verified && (
              <BadgeCheck className="text-green-500 w-5 h-5" />
            )}
          </div>

          {/* Content with Read More */}
          <p className="text-sm text-muted-foreground mt-3">
            {isExpanded
              ? blog.content
              : blog.content.slice(0, 120) + "..."}
          </p>

          <button
            onClick={() =>
              setExpandedBlogId(isExpanded ? null : blog._id)
            }
            className="text-blue-600 text-sm font-semibold mt-1 w-fit"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>

          <span className="text-xs text-muted-foreground mt-2">
            By {blog.author}
          </span>

          {/* Reactions */}
          <div className="flex gap-3 mt-4">
            <Button
              size="sm"
              variant="default"
              className={
                blog.userReaction === "like"
                  ? "bg-blue-600 text-white"
                  : ""
              }
              onClick={() => openReactionModal(blog._id, "like")}
            >
              <ThumbsUp className="w-4 h-4 mr-1" />
              {blog.likes}
            </Button>

            <Button
              size="sm"
              variant="default"
              className={
                blog.userReaction === "dislike"
                  ? "bg-blue-600 text-white"
                  : ""
              }
              onClick={() => openReactionModal(blog._id, "dislike")}
            >
              <ThumbsDown className="w-4 h-4 mr-1" />
              {blog.dislikes}
            </Button>
          </div>
        </div>
      </motion.div>
    );
  })}
</div>


      {/* Reaction Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setModalOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold mb-4">
              Enter your email to {reactionType}
            </h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-primary"
            />
            <Button
              onClick={submitReaction}
              disabled={modalLoading || !email}
              className="w-full"
            >
              {modalLoading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}