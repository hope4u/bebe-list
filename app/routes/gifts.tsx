import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import Index from "~/routes/index";

export async function loader({ request }: LoaderArgs) {
  const giftListItems = [
    {
      id: "pram",
      title: "Kinderwagen",
      text: "Neben dem Wunderschönen und gemütlichen 'Hesba' bruachen wir auch noch etwas praktisches.",
      img: "/img/Wagen.jpeg",
    },
    {
      id: "bear",
      title: "Plüschtier",
      text: "Gibt es etwas schöneres als die Errinnerung an unsere ersten Plüschtiere?",
      img: "/img/Baer.jpeg",
    },
    {
      id: "flags",
      title: "Text",
      text: "Kleine Unterhaltungen - vorallem aus Holz - finde ich super.",
      img: "/img/Text.jpeg",
    },
    {
      id: "stuff",
      title: "Weiteres",
      text: "Keine Idee, ein Gutschein von Babycenter vieleicht?",
      img: "/img/Stuff.jpeg",
    },
  ];
  return json({ giftListItems });
}

export default function GiftsPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <Index>
      <div className="flex h-full min-h-screen flex-col">
        <header className="flex items-center justify-between p-4 text-yellow-800">
          <h1 className="text-3xl font-bold">
            <Link to=".">Gifts</Link>
          </h1>
        </header>

        <main className="flex flex-wrap justify-between gap-6 h-full bg-white">          
            <Outlet context={{ data }} />
        </main>
      </div>
    </Index>
  );
}
