// @ts-nocheck

const colorSet = [
  {color: 'red'},
  {color: 'crimson'},
  {color: 'orange'},
  {color: 'gold'},
  {color: 'yellow'},
  {color: 'lime'},
  {color: 'limegreen'},
  {color: 'deepskyblue'},
  {color: 'blue'},
  {color: 'purple'},
  {color: 'deeppink'},
  {color: 'black'},
  {color: 'white'},
  {color: 'saddlebrown'}
];

const options = [
  ['Background Color', 'backgroundColor'],
  ['Time Color', 'timeColor'],
  ['Date Color', 'dateColor'],
  ['Active Minutes Color', 'activeMinutesColor'],
  ['Calories Burned Color', 'caloriesColor'],
  ['Distance Traveled Color', 'distanceColor'],
  ['Floors Climbed Color', 'elevationGainColor'],
  ['Steps Taken Color', 'stepsColor']
];

registerSettingsPage(() => {
  return <Page>
    <Section title={<Text>Display User Activities</Text>}>
      <Toggle settingsKey={'activeMinutesShow'} label={<Text>Active Minutes</Text>}/>
      <Toggle settingsKey={'caloriesShow'} label={<Text>Calories Burned</Text>}/>
      <Toggle settingsKey={'distanceShow'} label={<Text>Distance Traveled</Text>}/>
      <Toggle settingsKey={'elevationGainShow'} label={<Text>Floors Climbed</Text>}/>
      <Toggle settingsKey={'stepsShow'} label={<Text>Steps Taken</Text>}/>
    </Section>
    {options.map(([title, settingsKey]) =>
        <Section title={title}>
          <ColorSelect
              centered={true}
              settingsKey={settingsKey}
              colors={colorSet}/>
        </Section>
    )}
  </Page>;
});
