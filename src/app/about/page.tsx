import Navbar from "../components/navbarAdmin/page"

export default function about() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis tincidunt lectus. Aliquam feugiat at ipsum eget eleifend. Phasellus rutrum, magna nec mollis mattis, sapien ipsum suscipit tellus, id placerat nisl nisi at velit. Proin consectetur arcu non vestibulum aliquet. Nunc eget maximus elit. Vestibulum ornare at quam vulputate condimentum. Integer vestibulum ante pretium diam commodo rutrum. Integer ex velit, tristique vel justo sed, laoreet volutpat metus. Donec eget dui lectus. Aliquam blandit nisl sed mi congue egestas. Aenean condimentum augue ligula, ac tempus metus fermentum quis. Aliquam magna dolor, pellentesque eget metus et, cursus aliquet felis. Aliquam eleifend, tellus eget aliquam vehicula, ex magna scelerisque leo, hendrerit vehicula nibh metus vel ipsum. Duis id molestie arcu. Aliquam pellentesque, arcu eget dignissim varius, risus massa gravida arcu, at tristique risus ligula sit amet nisi. Sed eleifend interdum ipsum, eget venenatis augue commodo in. Morbi varius, dolor ac gravida pulvinar, risus enim consectetur nisl, ac tincidunt ipsum erat in nibh. Vivamus scelerisque vestibulum dictum. Phasellus blandit tempor leo in feugiat. Praesent in arcu nec nibh mollis sollicitudin. Vestibulum consequat, ipsum eu porttitor ultricies, justo nisl viverra lorem, id vestibulum eros lacus ac lacus. Sed tincidunt bibendum leo vitae sagittis. Donec facilisis ipsum odio, vitae aliquet sapien hendrerit a. Donec in congue purus, at tempor risus. Suspendisse potenti. Suspendisse dapibus sollicitudin sollicitudin. In sodales suscipit eros ut consectetur. Fusce nec placerat ligula. Integer euismod bibendum ante, vitae sodales risus eleifend quis. Etiam ut pharetra eros. Phasellus vehicula libero quis mattis faucibus. Vestibulum nec diam luctus, ornare tortor non, pellentesque nisl. Fusce faucibus, neque vitae iaculis vehicula, justo odio dignissim orci, at lobortis dui odio vel lectus. Curabitur urna elit, placerat ac euismod eget, dapibus sed dolor. Nam maximus interdum ante, et malesuada nisi dapibus ultricies. Mauris ullamcorper odio non massa luctus, eget accumsan tellus molestie.
        </p>
      </main>
    </div>
  )
}