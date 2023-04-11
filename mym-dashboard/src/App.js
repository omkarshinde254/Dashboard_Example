import './App.css';
import logo from './assets/Group_185.png'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler, } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Radar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Title, Tooltip, Legend);

// ChartJS.defaults.global.legend.display = false;

// Bar Chart
// const labels = ['Connections', 'Messages', 'Campaigns'];
export const data = {
  // labels: ['Connections', 'Messages', 'Campaigns'],
  labels: ['d'],
  datasets: [
    {
      label: 'Connections',
      data: [425],
      backgroundColor: ['#C2ECC1']
    },
    {
      label: 'Messages',
      data: [295],
      backgroundColor: ['#1F1F1F']
    },
    {
      label: 'Campaigns',
      data: [750],
      backgroundColor: ['#C5C7F6']
    }
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      align: 'start',
      labels: {
        boxWidth: 15,
        boxHeight: 15,
      }
    },
    datalabels: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
    x: {
      display: false,
    },
  },
};
// ===================

// Doughnut Chart
export const data_doughnut = {
  labels: ['Invititions Sent (286)', 'Pending Invitations (12)', 'Profile views (2891)'],
  datasets: [
    {
      data: [33, 33, 33],
      backgroundColor: ['#1F1F1F', '#C2ECC1', '#C5C7F6'],
    },
  ],
};

export const options_doughnut = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 15,
        boxHeight: 15,
      }
    },
  },
}
// ===================


// Radar Chart
export const data_radar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      data: [40, 70, 60, 40, 10, 80, 62],
      backgroundColor: 'rgba(197, 199, 246, 0.3)',
      borderWidth: 1,
      opacity: 0.5,
      label: 'Campagin 1 (12,423)'
    },
    {
      data: [70, 20, 40, 10, 60, 50, 50],
      backgroundColor: 'rgba(194, 236, 193, 0.3)',
      borderWidth: 1,
      label: 'Campagin 2 (12,423)'
    },
  ],
};

export const options_radar = {
  responsive: true,
  showLines: true,
  scale: {
    ticks: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 15,
        boxHeight: 15,
      }
    },
  },
}
// ===================

function App() {
  return (
    <div className="grid grid-cols-12 h-screen">
      {/* Container 1 - Nav Container */}
      <div className="col-span-2 bg-[#131313]">
        <div className='grid grid-rows-auto'>
          <div className='text-[#F8F8F8]'>
            <div className="flex flex-row justify-center mt-5 space-x-2">
              <img src={logo} alt="logo" className='h-7 w-8 mt-2 -ml-4' /> <div className="cursor-pointer text-xl text-[#F8F8F8] font-sulphur font-medium tracking-widest pt-2">Realply</div>
            </div>
          </div>
          <div className='text-[#F8F8F8] pt-10'>
            <img src={require('./assets/Rectangle_157.png')} alt='scroll' className='absolute' />
            <div className="flex flex-row justify-start space-x-2 pl-16 pb-4">
              <img src={require('./assets/dashboard_action.png')} alt="dashboard" className='h-4 w-4 mt-1' />
              <div className="text-base text-[#D4D4FC] font-sulphur font-normal tracking-widest cursor-pointer">Dashboard</div>
            </div>

            <div className="flex flex-row justify-start space-x-2 pl-16 pb-4">
              <img src={require('./assets/message.png')} alt="messages" className='h-4 w-4 mt-1' />
              <div className="text-base text-[#F8F8F8] font-sulphur font-normal tracking-widest cursor-pointer">Messages</div>
            </div>

            <div className="flex flex-row justify-start space-x-2 pl-16 pb-4">
              <img src={require('./assets/calculator.png')} alt="calender" className='h-4 w-4 mt-1' />
              <div className="text-base text-[#F8F8F8] font-sulphur font-normal tracking-widest cursor-pointer">Calender</div>
            </div>

            <div className="flex flex-row justify-start space-x-2 pl-16 pb-4">
              <img src={require('./assets/flash.png')} alt="campaigns" className='h-4 w-4 mt-1' />
              <div className="text-base text-[#F8F8F8] font-sulphur font-normal tracking-widest cursor-pointer">Campaigns</div>
            </div>

          </div>
          <div className='text-[#F8F8F8] pt-8 pb-4'>
            <div className="flex flex-row justify-start space-x-2 pl-16 pb-4">
              <img src={require('./assets/setting-3.png')} alt="settings" className='h-4 w-4 mt-1' />
              <div className="text-base text-[#F8F8F8] font-sulphur font-normal tracking-widest cursor-pointer">Settings</div>
            </div>
            <div className="flex flex-row justify-start space-x-2 pl-16 pb-4">
              <img src={require('./assets/danger.png')} alt="help" className='h-4 w-4 mt-1' />
              <div className="text-base text-[#F8F8F8] font-sulphur font-normal tracking-widest cursor-pointer">Help?</div>
            </div>
          </div>
          <div className='text-[#F8F8F8]'>
            <div className="flex flex-row justify-center pb-4">
              <div className='border rounded-2xl w-48 p-3 border-[#D4D4FC]'>
                <div className="text-base text-[#F8F8F8] font-sulphur font-black">
                  Your free trial is about to end in <div className='text-3xl font-roboto font-semibold'>10 days.</div>
                </div>
                <div className='text-xs font-thin text-[#D4D4FC] font-sulphur'>
                  You will not be billed during your free trial.

                  <div className='pt-4'>To keep your projects running after the trial end, upgrade to a paid option.</div>
                </div>
                <button className="rounded-lg p-2 mt-3 ml-10 border border-[#D4D4FC] bg-slate-700">Upgrade</button>
              </div>
            </div>
          </div>
          <div className='text-[#F8F8F8]'>
            <div className="flex flex-row justify-start space-x-2 pl-16 pb-4 pt-2">
              <img src={require('./assets/send-square.png')} alt="Logout" className='h-4 w-4 mt-1' />
              <div className="text-base text-[#F8F8F8] font-sulphur font-normal tracking-widest cursor-pointer">Log Out</div>
            </div>
          </div>

        </div>
      </div>

      {/* Container 2 */}
      <div className="col-span-4 bg-[#F8F8F8]">
        <div className='grid grid-rows-auto'>
          <div className='text-rose-500'>
            <div className="flex flex-row justify-start pl-20 mt-5 space-x-2">
              <div className="text-2xl text-[#131313] font-sulphur font-semibold tracking-widest pt-2">Dashboard</div>
            </div>
          </div>

          <div className='mt-14 pl-20 pb-4 justify-start'>
            <div className='grid grid-rows-2'>
              <div className='text-[#94979A] text-lg font-medium font-sulphur'>Connections</div>
              <div className='text-rose-500 -mt-1'>
                <div className='grid grid-cols-2'>
                  <div className='text-[#131313] text-3xl font-medium font-rubik tracking-normal'>2632</div>
                  <div>
                    <img src={require('./assets/Frame 15.png')} alt="percentframe" className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-300 ml-16 mr-32"></div>

          <div className='mt-2 pl-20 pb-4 justify-start'>
            <div className='grid grid-rows-2'>
              <div className='text-[#94979A] text-lg font-medium font-sulphur'>Followers</div>
              <div className='text-rose-500 -mt-1'>
                <div className='grid grid-cols-2'>
                  <div className='text-[#131313] text-3xl font-medium font-rubik tracking-normal'>2667</div>
                  <div>
                    <img src={require('./assets/Frame_15_1.png')} alt="percentframe" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-300 ml-16 mr-32"></div>


          <div className='mt-2 pl-20 pb-4 justify-start'>
            <div className='grid grid-rows-2'>
              <div className='text-[#94979A] text-lg font-medium font-sulphur'>Connects Invites</div>
              <div className='text-rose-500 -mt-1'>
                <div className='grid grid-cols-2'>
                  <div className='text-[#131313] text-3xl font-medium font-rubik tracking-normal'>100</div>
                  <div>
                    <img src={require('./assets/Frame_15_2.png')} alt="percentframe" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='mt-4 ml-20 mr-32'>
            <Bar options={options} data={data} height={320} />
          </div>
        </div>
      </div>

      {/* Container 3 */}
      <div className="col-span-6">
        <div className='grid grid-rows-auto'>
          <div className='mt-5 ml-10'>
            <div className='grid grid-cols-2'>
              <div className='flex flex-row justify-start'>
                <input
                  className="bg-[#F8F8F8] border rounded-lg text-gray-700 w-64 py-1 px-2 leading-tight focus:outline-none"
                  type="text" placeholder="Search" aria-label="Search"></input>
                <img src={require('./assets/search.png')} alt="search" className='h-5 w-5 mt-2 ml-56 absolute' />
              </div>
              <div className=''>
                <div className='flex flex-row space-x-5 justify-end pr-10'>
                  <img src={require('./assets/bell.png')} alt="bell" className='h-8 w-8 mt-1 cursor-pointer' />
                  <img src={require('./assets/profile.png')} alt="profile" className='h-8 w-8 mt-1 cursor-pointer' />
                  <div className='text-[#131313] text-lg font-semibold font-sulphur tracking-normal mt-2 cursor-pointer'>Jacob Frost</div>
                  <img src={require('./assets/arrow-square-down.png')} alt="arrowdown" className='h-5 w-5 mt-3 cursor-pointer' />
                </div>
              </div>
            </div>
          </div>

          {/* Part-3 Container 2 */}
          <div className='mt-12 ml-16'>
            <div className='grid grid-row-2'>
              <div className=''>
                <div className='grid grid-cols-2'>
                  <div className=''>
                    <div className='text-[#131313] text-xl font-semibold font-sulphur tracking-normal'>Campaign Analytics</div>
                  </div>
                  <div className=''>
                    <img src={require('./assets/Frame_18.png')} alt="Date Picker" className='ml-32 cursor-pointer' />
                  </div>
                </div>
              </div>

              <div className='flex flex-row space-x-24 mt-4'>
                <div className='flex flex-col'>
                  <div className='text-[#94979A] text-lg font-medium font-sulphur tracking-normal'>Invitations sent</div>
                  <div className='text-[#131313] text-3xl font-medium font-rubik tracking-normal'>286</div>
                </div>
                <div>
                  <div className='text-[#94979A] text-lg font-medium font-sulphur tracking-normal'>Pending Invitations</div>
                  <div className='text-[#131313] text-3xl font-medium font-rubik tracking-normal'>12</div>

                </div>
                <div>
                  <div className='text-[#94979A] text-lg font-medium font-sulphur tracking-normal'>Profile views</div>
                  <div className='text-[#131313] text-3xl font-medium font-rubik tracking-normal'>2891</div>

                </div>
              </div>
            </div>
          </div>

          <div className='mt-6 justify-evenly flex flex-row space-x-8'>
            <div className=''>
              <Doughnut data={data_doughnut} options={options_doughnut} />
            </div>
            <div className=''>
              <Radar data={data_radar} options={options_radar} />
            </div>
          </div>

          {/* Part3 => Container -4  */}
          <div className='flex flex-col ml-16 mt-4'>
            <div className='flex flex-row justify-between'>
              <div className='text-[#131313] text-xl font-semibold font-sulphur tracking-normal'>Recent Activity</div>
              <div className='mr-10'>
                <img src={require('./assets/Frame_24hr.png')} alt="Date Picker" className='cursor-pointer' />
              </div>
            </div>
            <img src={require('./assets/Scrollbar.png')} alt="Scrollbar" className='absolute h-28 right-0.5 bottom-1' />
            <div className='flex flex-row space-x-4'>
              <img src={require('./assets/Ellipse 5.png')} alt="Ellipse" />
              <div className='mt-1 text-[#131313] text-base font-normal font-sulphur tracking-normal'><span className="font-semibold">Alex Morgan</span> sent you a <span className='font-semibold'> connection request</span>.</div>
            </div>
            <div className="border-b-2 border-gray-300 -ml-2 mr-4 pt-1"></div>

            <div className='flex flex-row space-x-4 pt-1'>
              <img src={require('./assets/Ellipse 6.png')} alt="Ellipse" />
              <div className='mt-1 text-[#131313] text-base font-normal font-sulphur tracking-normal'><span className="font-semibold">Mujo Prosper</span> sent you a <span className='font-semibold'> connection request</span>.</div>
            </div>
            <div className="border-b-2 border-gray-300 -ml-2 mr-4 pt-1"></div>

            <div className=''>
              <div className='flex flex-row space-x-4 pt-1'>
                <img src={require('./assets/e17.png')} alt="Ellipse" className='h-8 w-8' />
                <div className='mt-1 text-[#131313] text-base font-normal font-sulphur tracking-normal'>
                  Upcoming Task - <span className='font-semibold'>Create a campaign for designers </span>due on <span className='font-semibold'>02/04/2023.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
