import { Box } from '@chakra-ui/layout';


const Footer = () => (
<div class="container mx-auto" >
    <div class="p-5 bg-gray-100 rounded-lg py-12 m-5">
        <div class="flex flex-col ">
            <h3 class="text-3xl leading-10 text-blue-400 w-full text-center font-bold">Suscríbete para ver mas</h3>
            <div class="text-base text-gray-5s00 w-full  md:w-2/4 self-center text-center lg:pt-4">Únase a nuestro boletín informativo y esté al tanto de las últimas propiedades en venta antes que nadie más.</div>
        </div>
        <div class="flex flex-row justify-center space-x-3 py-4">
            <input class="bg-white rounded-lg text-sm px-2 sm:px-3 md:px-8 py-3" type="text" placeholder="email@email.com"/>
            <input class="font-bold rounded-lg text-white bg-blue-400 hover:bg-blue-300 cursor-pointer px-3 py-1 md:px-6 md:py-3 focus:outline-none"  type="submit" value="Subscribete"/>
        </div>
        <div class="font-bold text-blue-400 content-center">
            <ul class="flex flex-row space-x-6 py-4 justify-center">
                <li>
                    <a href="#" class="hover:underline cursor-pointer">Footerlink 1</a>
                </li>
                 <li>
                    <a href="#" class="hover:underline cursor-pointer">Footerlink 2</a>
                </li>
            </ul>
        </div>
        <div class="">
            <ul class="flex flex-row space-x-4 justify-center">
                <li>
                    <a href="https://www.facebook.com/davidalejandro.rojasespejo" target="_blank" rel="noreferrer">
                        <svg id="Bold" enable-background="new 0 0 24 24" viewBox="0 0 24 24" x="50%" y="50%" xmlns="http://www.w3.org/2000/svg"
                            class="stroke-current  fill-current text-blue-400 w-4 hover:opacity-50 duration-300 ease-in-out">
                            <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/davidredz10/" target="_blank" rel="noreferrer">
                        <svg enable-background="new 0 0 24 24"  viewBox="0 0 24 24" x="50%" y="50%" xmlns="http://www.w3.org/2000/svg"
                            class="stroke-current fill-current text-blue-400 w-4 hover:opacity-50 duration-300 ease-in-out">
                            <path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"/>
                            <path d="m.396 7.977h4.976v16.023h-4.976z"/>
                            <path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"/>                           
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
);

export default Footer;