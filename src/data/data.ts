import {ref} from "vue";

const data = {
  message:"Voted Best Thrift Store of Raton 2025",
  headline:"At Delta Thrift, we take pride in offering only the highest quality vintage thrift finds. From clothes, to antiques, and furniture, experience a world of forgotten treasures.",
  about1:"We're a local business in the heart of Raton. Since 2020 we have been providing high quality thrift store finds for a great price. Visit us at our 1st Street location to see our changing selection.",
  about2:"We're proud to be part of Raton's community and invite you to discover the charm of our vintage finds. Our location provides easy access to a unique shopping destination right in the heart of town.",
  contact1:"We're here to assist you with any questions or inquiries you may have. Please feel free to contact us via phone, email, or via instant messenger. We look forward to hearing from you!",
  reviews:[
    {
      person:"Don Chano",
      active:ref(false),
      stars:5,
      image:"../../public/person1.jpg",
      reviewText:"\"I was impressed by the selection and could spend hours browsing the entire store.\""
    },
    {
      person:"Mary Yousef",
      active: ref(false),
      stars:4,
      image:"../../public/person3.jpg",
      reviewText:"\"Every visit has something new and unique to find! I look forward to thrifting Thursdays.\""
    },
    {
      person:"Portia Prince",
      active: ref(false),
      stars:5,
      image:"../../public/person2.jpg",
      reviewText:"\"Delta Thrift actually cares about the selection that goes into the store and it shows.\""
    }
  ]
}

export default data;
