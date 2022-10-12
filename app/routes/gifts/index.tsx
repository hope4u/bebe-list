import { useOutletContext } from "@remix-run/react";

export default function GiftsIndexPage() {
  const contextData = useOutletContext<any>();
  const data = contextData;

  return (
    <>
      {data.giftListItems.map((gift :any) => (
        <div
          key={gift.id}
          className="flex-none w-96 rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
        >
          <a href={gift.id}>
            <img className="rounded-t-lg p-8" src={gift.img} alt={gift.title} />
          </a>
          <div className="px-5 pb-5">
            <a href={gift.id}>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {gift.text}
              </h5>
            </a>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                restbetrag
              </span>
              <a
                href={gift.id}
                className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                schenken
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
