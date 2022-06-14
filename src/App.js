import React from "react";
import Button from "./UI/Button";
import classes from "./App.module.css";
import { BsFillCartPlusFill } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <div className={classes.container}>
        <div className={classes["btn-box"]}>
          <div className={classes.btn}>
            <span>&lsaquo;button /&rsaquo;</span>
            <Button className={classes.default}>Default</Button>
          </div>
          <div className={classes.btn}>
            <span className={classes.hoverText}>&#38;:hover, &#38;:focus</span>
            <Button className={classes["default-hover"]}>Default</Button>
          </div>
        </div>
        <div className={classes["btn-box"]}>
          <div className={classes.btn}>
            <span>&lsaquo;button variant="outline" /&rsaquo;</span>
            <Button className={classes.outline}>Default</Button>
          </div>
          <div className={classes.btn}>
            <span className={classes.hoverText}>&#38;:hover, &#38;:focus</span>
            <Button className={classes["outline-hover"]}>Default</Button>
          </div>
        </div>
        <div className={classes["btn-box"]}>
          <div className={classes.btn}>
            <span>&lsaquo;button variant="text" /&rsaquo;</span>
            <Button className={classes.text}>Default</Button>
          </div>
          <div className={classes.btn}>
            <span className={classes.hoverText}>&#38;:hover, &#38;:focus</span>
            <Button className={classes["text-hover"]}>Default</Button>
          </div>
        </div>
        <div className={classes["btn-box"]}>
          <div className={classes.btn}>
            <span>&lsaquo;button disableShadow /&rsaquo;</span>
            <Button className={classes.primary}>Default</Button>
          </div>
        </div>
        <div className={classes["btn-box"]}>
          <div className={classes.btn}>
            <span>&lsaquo;button disabled/&rsaquo;</span>
            <Button className={classes.disable} disable>
              Disabled
            </Button>
          </div>
          <div className={classes.btn}>
            <span>&lsaquo;button variant="text" disabled/&rsaquo;</span>
            <Button className={classes["disabled-hover"]}>Disabled</Button>
          </div>
        </div>
        <div className={classes["btn-box"]}>
          <div className={classes.btn}>
            <span>&lsaquo;button startIcon="local-grocery-store"/&rsaquo;</span>
            <Button className={`${classes.grocery} ${classes.primary}`}>
              <BsFillCartPlusFill className={classes.icon} />
              Default
            </Button>
          </div>
          <div className={classes.btn}>
            <span>&lsaquo;button endIcon="local-grocery-store"/&rsaquo;</span>
            <Button className={`${classes.grocery} ${classes.primary}`}>
              Default
              <BsFillCartPlusFill className={classes.icon} />
            </Button>
          </div>
        </div>
        <div className={classes["btn-box"]}>
          <div className={classes.btn}>
            <span>&lsaquo;button size="sm" /&rsaquo;</span>
            <Button className={`${classes.sm} ${classes.primary}`}>
              Default
            </Button>
          </div>
          <div className={classes.btn}>
            <span>&lsaquo;button size="md" /&rsaquo;</span>
            <Button className={`${classes.md} ${classes.primary}`}>
              Default
            </Button>
          </div>
          <div className={classes.btn}>
            <span>&lsaquo;button size="lg" /&rsaquo;</span>
            <Button className={`${classes.lg} ${classes.primary}`}>
              Default
            </Button>
          </div>
        </div>
        <div className={classes["btn-box"]}>
          <div className={classes.btn}>
            <span>&lsaquo;button color="default" /&rsaquo;</span>
            <Button className={classes.default}>Default</Button>
          </div>
          <div className={classes.btn}>
            <span>&lsaquo;button color="primary" /&rsaquo;</span>
            <Button className={classes.primary}>Default</Button>
          </div>
          <div className={classes.btn}>
            <span>&lsaquo;button color="secondary" /&rsaquo;</span>
            <Button className={classes.secondary}>Secondary</Button>
          </div>
          <div className={classes.btn}>
            <span>&lsaquo;button color="danger" /&rsaquo;</span>
            <Button className={classes.danger}>Danger</Button>
          </div>
        </div>
        <div className={classes["btn-box"]}>
          <div className={classes.btn}>
            <span>&lsaquo;button color="default" /&rsaquo;</span>
            <Button className={classes['default-hover']}>Default</Button>
          </div>
          <div className={classes.btn}>
            <span>&lsaquo;button color="primary" /&rsaquo;</span>
            <Button className={classes['primary-hover']}>Default</Button>
          </div>
          <div className={classes.btn}>
            <span>&lsaquo;button color="secondary" /&rsaquo;</span>
            <Button className={classes['secondary-hover']}>Secondary</Button>
          </div>
          <div className={classes.btn}>
            <span>&lsaquo;button color="danger" /&rsaquo;</span>
            <Button className={classes['danger-hover']}>Danger</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
