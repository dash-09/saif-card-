import './App.css';
import Card from './component/Card';
function App() {
  return (
    <div className="app">
      <div className="outer-box">
        <div className="inner-box">
          {/* whats new section */}
          <div className="what-new">
            <p className="what-new-para">What's New</p>
          </div>
          {/*  Featured courses */}
          <div className="featured-course">
            <div className="featured-course-para">
              <p>Featured courses</p>
            </div>
            <div className="featured-course-button">
              <button>  All Courses </button>
            </div>
          </div>

          {/* description below featured courses */}

          <div className="desc-one">
          
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            </p>
            <p>
              iusto qui quo pariatur iste fugiat quos quaerat nobis, id facilis
            </p>
          </div>

          {/* now the important card section */}
          <div className='card-container'>

           <Card/>
          
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
