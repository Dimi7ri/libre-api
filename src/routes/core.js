const routes = app => {
  app
    .route('/libre')
    .get((req, res) => res.send('You used GET in core'))

    .post((req, res) => res.send('You used POST in core'));

  app
    .route('/libre/:dataId')
    .put((req, res) => res.send('You used PUT in core'))
    .delete((req, res) => res.send('You used DELETE in core'));
};

export default routes;
