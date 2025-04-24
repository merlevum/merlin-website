import React, { useState, useEffect } from "react";

import { Collapse } from "react-bootstrap";

import StarBulletList from "../elements/StarBulletList";

import useMerlinContext from "../hooks/useMerlinContext";

const TandC = () => {
  const { page } = useMerlinContext();
  const [open, setOpen] = useState(false);

  const termsAndConditionsList = [
    "You must be 18+ to commission me.",
    "I may decline a commission altogether without specifying the reason at any time during the quote or before asking for payment.",
    "I retain the right to refuse to draw anything I'm uncomfortable with/I'm not sure I can do. If you're uncertain whether your request will be accepted (e.g. it includes extreme violence or gore), you can inquire about it first.",
    "I retain the copyright to the illustration as the artist; you must include attribution whenever you repost said illustration.",
    "Only non-commercial use of the commissioned picture is permitted. Feel free to print it out for personal use or use it as an icon! I do not allow major changes to the finished picture. If you're looking to alter the picture later on outside of cropping it for an icon/header, you can negotiate it with me beforehand.",
    "Mass reproduction and non-personal use of the finished illustration and any progress shots/sketches/works in progress that I send you is prohibited, be it for commercial or non-commercial purposes.",
    "You may not use my work or any part of it for any AI or blockchain-based technology, including but not limited to generative AI and NFTs.",
    "You may not alter or remove my signature.",
    "Feel free to post the finished illustration online with credit (my name and a clickable link to one of my socials). I will appreciate it if you wait until I post the commission on my socials first.",
    "I will not claim ownership of any characters that do not belong to me.",
    "I will not use the finished illustration to create and sell merchandise (e.g. postcards) without your permission.",
  ];

  const timeFrameList = [
    "I work very, very slowly. Expect me to take 1 to 6 months (after the payment) to complete your commission. If any delays occur, I will do my best to let you know as soon as possible. This is a first come first serve process. There may be commissions ahead of yours.",
    "If you have a certain deadline you would like me to meet, or you need the illustration urgently, please discuss it with me BEFORE you pay for the commission. Otherwise, I cannot guarantee either.",
  ];

  const processAndEditsList = [
    "Rough Sketch: to give you an idea of the pose and the overall composition. This is the stage where practically anything can be changed if you so require. Once I start working on the lineart, any major edits to the previously agreed upon posing/composition will cost extra.",
    "Line Art: the finished line art. I can change a small number of things at your request (e.g., make the character's nose bigger) free of charge; any major edits, including adding larger details that were not part of the original commission request, will cost extra.",
    "Base Colors: I can change a small number of things at your request (e.g., make the character's shirt a different colour) free of charge; any major edits, including changing almost all the colours that were not part of the original commission request, will cost extra.",
    "Full Render: the finished illustration. You may request I change smaller details or perform minor color correction; any major edits, including adding larger details that were not part of the original commission request, or changed throughout the sketch, line art, or flat colours, will cost extra.",
  ];

  useEffect(() => {
    if (page === "T&C" || page === "Terms and Conditions") setOpen(true);
    else if (page !== "T&C" && page !== "Terms and Conditions" && open) setOpen(false);
  }, [page]);

  return (
    <Collapse in={open}>
      <div>
        <div className="mainHeaderText d-flex justify-content-center align-items-center">Terms and Conditions</div>
        <div>
          <StarBulletList list={termsAndConditionsList} />
        </div>

        <div className="subHeaderText">Time Frame</div>
        <div>
          <StarBulletList list={timeFrameList} />
        </div>

        <div className="subHeaderText">Process and Edits</div>
        <div>
          <StarBulletList list={processAndEditsList} />

          <div className="generalContent">
            Two minor revision sessions are included for each stage, if needed;
            the rough sketch can be redone completely twice. Regardless of how
            major the edit is, if I forget to include any details that were part
            of the original request, or portray them in a way that clearly goes
            against your original description (e.g. this or that object had been
            described as green and I made it red), such editing will be provided
            free of charge.
          </div>
        </div>
      </div>
    </Collapse>
  );
};

export default TandC;
