import './App.css';
import logo from './assets/Group_185.png'

function App() {
  return (
    <div className="grid grid-cols-12 h-screen">
      {/* Container 1 - Nav Container */}
      <div className="col-span-2 bg-[#131313]">
        <div className='grid grid-rows-auto'>
          <div className='text-[#F8F8F8]'>
            <div className="flex flex-row justify-center mt-5 space-x-2">
              <img src={logo} alt="logo" className='h-10 w-10' /> <div className="text-xl text-[#F8F8F8] font-sulphur font-medium tracking-widest pt-2">Realply</div>
            </div>
          </div>
          <div className='text-[#F8F8F8] pt-10'>
            <div className="flex flex-row justify-start space-x-2 pl-16 pb-4">
              <img src={require('./assets/dashboard_action.png')} alt="dashboard" className='h-6 w-6' />
              <div className="text-base text-[#F8F8F8] font-sulphur font-normal tracking-widest">Dashboard</div>
            </div>

            <div className="flex flex-row justify-start space-x-2 pl-16 pb-4">
              <img src={require('./assets/message.png')} alt="messages" className='h-6 w-6' />
              <div className="text-base text-[#F8F8F8] font-sulphur font-normal tracking-widest">Messages</div>
            </div>

            <div className="flex flex-row justify-start space-x-2 pl-16 pb-4">
              <img src={require('./assets/calculator.png')} alt="calender" className='h-6 w-6' />
              <div className="text-base text-[#F8F8F8] font-sulphur font-normal tracking-widest">Calender</div>
            </div>

            <div className="flex flex-row justify-start space-x-2 pl-16 pb-4">
              <img src={require('./assets/flash.png')} alt="campaigns" className='h-6 w-6' />
              <div className="text-base text-[#F8F8F8] font-sulphur font-normal tracking-widest">Campaigns</div>
            </div>

          </div>
          <div className='text-[#F8F8F8] pt-8 pb-4'>
            <div className="flex flex-row justify-start space-x-2 pl-16 pb-4">
              <img src={require('./assets/setting-3.png')} alt="settings" className='h-6 w-6' />
              <div className="text-base text-[#F8F8F8] font-sulphur font-normal tracking-widest">Settings</div>
            </div>
            <div className="flex flex-row justify-start space-x-2 pl-16 pb-4">
              <img src={require('./assets/danger.png')} alt="help" className='h-6 w-6' />
              <div className="text-base text-[#F8F8F8] font-sulphur font-normal tracking-widest">Help?</div>
            </div>
          </div>
          <div className='text-[#F8F8F8]'>
            <div className="flex flex-row justify-center pb-4">
              <div className='border rounded-2xl w-48 p-3 border-[#D4D4FC]'>
                <div className="text-base text-[#F8F8F8] font-sulphur font-black">
                  Your free trial is about to end in <div className='text-3xl'>10 days.</div>
                </div>
                <div className='text-xs font-thin text-[#D4D4FC] font-sulphur'>
                  You will not be billed during your free trial.

                  <div className='pt-4'>To keep your projects running after the trial end, upgrade to a paid option.</div>
                </div>
                <button class="rounded-lg p-2 mt-3 ml-10 border border-[#D4D4FC] bg-slate-700">Upgrade</button>
              </div>
            </div>
          </div>
          <div className='text-[#F8F8F8]'>
            <div className="flex flex-row justify-start space-x-2 pl-16 pb-4 pt-2">
              <img src={require('./assets/send-square.png')} alt="Logout" className='h-6 w-6' />
              <div className="text-base text-[#F8F8F8] font-sulphur font-normal tracking-widest">Log Out</div>
            </div>
          </div>

        </div>

        {/* <div className="flex flex-row justify-center mt-10 space-x-2">
          <img src={logo} alt="logo" />
          <div className="text-xl text-[#F8F8F8] font-sulphur font-medium tracking-widest pt-2">Realply</div>
        </div>

        <div class="flex flex-col text-[#F8F8F8]">
          <div class="flex items-center justify-center h-16">
            <span class="text-xl font-bold">My App</span>
          </div>
          <nav class="flex items-center flex-col justify-between text-base">
            <a href="#" class="py-4 px-6">Dashboard</a>
            <a href="#" class="py-4 px-6">Profile</a>
            <a href="#" class="py-4 px-6">Settings</a>
            <a href="#" class="py-4 px-6">Logout</a>
          </nav>
        </div> */}
      </div>

      {/* Container 2 */}
      <div className="col-span-4 bg-[#F8F8F8]"></div>

      {/* Container 3 */}
      <div className="col-span-6"></div>
    </div>

  );
}

export default App;
