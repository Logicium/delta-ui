import {ref} from "vue";

const data = {

  about1:"We're a local business in the heart of Raton. Since 2020 we have been providing high quality thrift store finds for a great price. Visit us at our 1st Street location to see our changing selection.",
  about2:"",
  reviews:[
    {
      person:"Don Chano",
      active:ref(false),
      image:"../../public/person1.jpg",
      reviewText:"\"I was impressed by the selection and could spend hours browsing the entire store.\""
    },
    {
      person:"Mary Yousef",
      active: ref(false),
      image:"../../public/person3.jpg",
      reviewText:"\"Every visit has something new and unique to find! I look forward to thrifting Thursdays.\""
    },
    {
      person:"Portia Prince",
      active: ref(false),
      image:"../../public/person2.jpg",
      reviewText:"\"Delta Thrift actually cares about the selection that goes into the store and it shows.\""
    }
  ]
}

export default data;
