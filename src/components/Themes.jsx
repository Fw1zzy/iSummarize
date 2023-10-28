const Themes = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute('class', 'dark')
  }

  const setLightMode = () => {
    document.querySelector("body").setAttribute('class', 'light')
  }

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode()
  }

  return (
    <div className='ml-5'>
      <label>
        <input class="toggle-checkbox" type="checkbox" onChange={toggleTheme} />
        <div class="toggle-slot">
          <div class="sun-icon-wrapper">
            <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
          </div>
          <div class="toggle-button"></div>
          <div class="moon-icon-wrapper">
            <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
          </div>
        </div>
      </label>

    </div>
  )
}

export default Themes
