import 'zone.js';

test('zone', () => {
  const executeTimeZoneSpec = {
    name: 'executeTimeZone',
    onScheduleTask: function (
      parentZoneDelegate,
      currentZone,
      targetZone,
      task,
    ) {
      console.time('scheduleTask');
      return parentZoneDelegate.scheduleTask(targetZone, task);
    },
    onInvokeTask: function (
      parentzone,
      currentZone,
      targetZone,
      task,
      applyThis,
      applyArgs,
    ) {
      console.time('callback');
      parentzone.invokeTask(targetZone, task, applyThis, applyArgs);
      console.timeEnd('callback');
      console.timeEnd('scheduleTask');
    },
  };

  Zone.current.fork(executeTimeZoneSpec).run(() => {
    setTimeout(function () {
      console.log('start callback...');
      for (let i = 0; i < 100; i++) {
        console.log(i);
      }
    }, 1000);
  });
});
