import Accordion from './components/accordion/Accordion';

function Demo() {
  return (
    <>
      <h1>Components Demo</h1>
      <hr />
      <h3>Accordion</h3>
      <Accordion
        id="accordionLink"
        title="Accordion Title"
        ariaControls="accordionPanel"
        ariaLabelledBy="accordionLink"
      >
        <p>Accordion Content Accordion Content Accordion Content</p>
      </Accordion>
      <hr />
    </>
  );
}

export default Demo;