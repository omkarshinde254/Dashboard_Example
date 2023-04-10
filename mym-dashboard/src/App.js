import './App.css';
import logo from './assets/Group_185.png'

function App() {
  return (
    <div class="grid grid-cols-12 h-screen">
      <div class="col-span-2 bg-[#131313]">
        <div class="flex flex-row justify-center mt-10">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div class="col-span-4 bg-[#F8F8F8]"></div>
      <div class="col-span-6"></div>
    </div>

  );
}

export default App;
