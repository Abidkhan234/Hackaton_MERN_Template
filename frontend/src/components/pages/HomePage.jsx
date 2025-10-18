// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import ErrorUI from "../errors/ErrorUI";
// import { fetchData } from "../../../apis/fetchErrorData";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../ui/card";
// import { Button } from "../ui/button";
// import QueryWrapper from "../wrappers/QueryWrapper";

// const HomePage = () => {
//   const { data, isLoading, error, isError, refetch } = useQuery({
//     queryKey: ["fetchProducts"],
//     queryFn: fetchData,
//   });

//   if (isLoading)
//     return (
//       <div className="flex justify-center items-center min-h-screen text-gray-500">
//         Loading data...
//       </div>
//     );

//   if (isError) return <ErrorUI error={error.message} onRetry={refetch} />;

//   return (
//     <QueryWrapper
//       error={error}
//       isError={isError}
//       isLoading={isLoading}
//       refetch={refetch}
//     >
//       <div className="grid grid-cols-3 gap-6 px-10 py-5">
//         {data.products.map((v, i) => (
//           <Card key={i}>
//             <CardHeader>
//               <CardTitle>{v.title}</CardTitle>
//               <CardDescription>{v.description}</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <p>Price: ${v.price}</p>
//             </CardContent>
//             <CardFooter>
//               <Button
//                 className={`bg-green-500 hover:bg-green-600 font-medium text-lg text-white max-[375px]:!px-3`}
//                 size={"lg"}
//               >
//                 Add to cart
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </QueryWrapper>
//   );
// };

// export default HomePage;

import React from "react";

const HomePage = () => {
  return <div>HomePage</div>;
};

export default HomePage;
