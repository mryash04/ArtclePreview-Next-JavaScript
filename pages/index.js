import Head from 'next/head';
import RedoIcon from '@material-ui/icons/Redo';

export default function Home() {
  return (
    <div className="px-8 mt-10">
      <Head>
        <title>Article Preview App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto lg:w-3/5 lg:flex lg:flex-row lg:h-auto">
        <img className="rounded-tr-md rounded-tl-md h-40 w-full lg:h-auto lg:w-2/5 lg:rounded-bl-md lg:rounded-tr-none" src="articleimage.jpg" alt="article" />
      </div>
      <div className="bg-white p-8 rounded-tl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md">
        <h2 className="text-gray-700 font-semibold">Articles make it easy to create rich and beautiful content in Channels. They are designed for long news, blogs and all types of content that needs a rich medium to be expressed properly.</h2>
        <p className="text-sm text-gray-600 mt-4">Articles are designed to be beautiful and easy to use. You have all the same content controls & formatting as you have in Pages, and in addition to that, you have easy to use image layouts, that make any boring article awesome 😄</p>
        <div className="flex items-center mt-8">
        <div className="flex items-center">
          <img className="h-10 w-10 rounded-full" src="reader.jpg" alt="reader" />
          <div className="ml-4">
            <p className="text-gray-800 text-sm font-semibold">Mark Williamsoses</p>
            <p className="text-gray-600 text-sm">27 Nov 2020</p>
          </div>
        </div>
        <div className=" w-8 h-8 ml-auto bg-gray-200 rounded-full flex items-center justify-center">
          <RedoIcon/>
        </div>
      </div>
      </div>
    </div>
  )
}
