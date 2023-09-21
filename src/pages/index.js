import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ProductFeed from "@/components/ProductFeed";
import { getSession } from "next-auth/react";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className="mx-w-screen-2xl mx-auto">
        <Banner />

        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context);
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }

    const products = await response.json();

    return {
      props: {
        products,
        session,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        products: [],
      },
    };
  }
}

// export async function getServerSideProps(context) {
//   const products = await fetch("https://fakestoreapi.com/products").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       products,
//     },
//   };
// }

// GET >>> https://fakestoreapi.com/products
