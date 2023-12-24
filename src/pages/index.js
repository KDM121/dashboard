import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="bg-base-100">
        <div className="flex justify-center w-screen bg-base-100">
          <h1 className="text-5xl font-bold text text-center py-5 border-y-2">
            The Dashboard of Services
          </h1>
        </div>
        {/*main services*/}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/*Service 1*/}
          <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full mx-6">
            <figure className="w-64 h-48 overflow-hidden">
              <img
                src="https://www.proxmox.com/android-chrome-512x512.png"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body flex flex-col">
              <div className="card-actions justify-end">
                <a
                  className="btn btn-primary btn-lg"
                  href="https://192.168.0.10:8006"
                >
                  Proxmox
                </a>
              </div>
            </div>
          </div>
          {/*Service 2*/}
          <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full mx-6">
            <figure className="w-64 h-48 overflow-hidden">
              <img
                src="https://www.kasmweb.com/android-chrome-512x512.png"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body flex flex-col">
              <div className="card-actions justify-end">
                <a
                  className="btn btn-primary btn-lg"
                  href="https://kasm.kieranmcdonnell.com"
                >
                  Kasm
                </a>
              </div>
            </div>
          </div>
          <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full mx-6">
            <figure className="w-64 h-48 overflow-hidden">
              <img
                src="https://github.com/everywall/ladder/raw/main/assets/pigeon.svg"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body flex flex-col">
              <div className="card-actions justify-end">
                <a
                  className="btn btn-primary btn-lg"
                  href="https://ladder.kieranmcdonnell.com"
                >
                  Ladder
                </a>
              </div>
            </div>
          </div>
          <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full mx-6">
            <figure className="w-64 h-48 overflow-hidden">
              <img
                src="https://www.kieranmcdonnell.com/favicon.ico"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body flex flex-col">
              <div className="card-actions justify-end">
                <a
                  className="btn btn-primary btn-lg"
                  href="https://www.kieranmcdonnell.com/"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
          <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full mx-6">
            <figure className="w-64 h-48 overflow-hidden">
              <img
                src="https://www.openmediavault.org/apple-touch-icon.png"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body flex flex-col">
              <div className="card-actions justify-end">
                <a
                  className="btn btn-primary btn-lg"
                  href="http://192.168.0.20:80"
                >
                  OpenMediaVault
                </a>
              </div>
            </div>
          </div>
          <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full mx-6">
            <figure className="w-64 h-48 overflow-hidden">
              <img
                src="https://github.com/alexta69/metube/blob/master/favicon/android-chrome-384x384.png?raw=true"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body flex flex-col">
              <div className="card-actions justify-end">
                <a
                  className="btn btn-primary btn-lg"
                  href="https://metube.kieranmcdonnell.com"
                >
                  Metube
                </a>
              </div>
            </div>
          </div>
          <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full mx-6">
            <figure className="w-64 h-48 overflow-hidden">
              <img
                src="https://www.proxmox.com/android-chrome-512x512.png"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body flex flex-col">
              <div className="card-actions justify-end">
                <a
                  className="btn btn-primary btn-lg"
                  href="https://192.168.0.10:8006"
                >
                  Proxmox
                </a>
              </div>
            </div>
          </div>
          <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full mx-6">
            <figure className="w-64 h-48 overflow-hidden">
              <img
                src="https://www.proxmox.com/android-chrome-512x512.png"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body flex flex-col">
              <div className="card-actions justify-end">
                <a
                  className="btn btn-primary btn-lg"
                  href="https://192.168.0.10:8006"
                >
                  Proxmox
                </a>
              </div>
            </div>
          </div>
          <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full mx-6">
            <figure className="w-64 h-48 overflow-hidden">
              <img
                src="https://www.proxmox.com/android-chrome-512x512.png"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body flex flex-col">
              <div className="card-actions justify-end">
                <a
                  className="btn btn-primary btn-lg"
                  href="https://192.168.0.10:8006"
                >
                  Proxmox
                </a>
              </div>
            </div>
          </div>
          <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full mx-6">
            <figure className="w-64 h-48 overflow-hidden">
              <img
                src="https://www.proxmox.com/android-chrome-512x512.png"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body flex flex-col">
              <div className="card-actions justify-end">
                <a
                  className="btn btn-primary btn-lg"
                  href="https://192.168.0.10:8006"
                >
                  Proxmox
                </a>
              </div>
            </div>
          </div>
          <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full mx-6">
            <figure className="w-64 h-48 overflow-hidden">
              <img
                src="https://www.proxmox.com/android-chrome-512x512.png"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body flex flex-col">
              <div className="card-actions justify-end">
                <a
                  className="btn btn-primary btn-lg"
                  href="https://192.168.0.10:8006"
                >
                  Proxmox
                </a>
              </div>
            </div>
          </div>
          <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full mx-6">
            <figure className="w-64 h-48 overflow-hidden">
              <img
                src="https://www.proxmox.com/android-chrome-512x512.png"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body flex flex-col">
              <div className="card-actions justify-end">
                <a
                  className="btn btn-primary btn-lg"
                  href="https://192.168.0.10:8006"
                >
                  Proxmox
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
