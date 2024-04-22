import LoadingController from './controllers/loading.controller';
import TaskController from './controllers/task.controller';
import NotificationController from './controllers/notification.controller';
import ConfirmationController from './controllers/confirmation.controller';
import BackgroundController from './controllers/background.changer';

export default class App {
  private loading_controller: LoadingController;

  private task_controller: TaskController;

  private notification_controller: NotificationController;

  private confirmation_controller: ConfirmationController;

  private background_controller: BackgroundController;

  constructor() {
    this.loading_controller = new LoadingController();
    this.task_controller = new TaskController();
    this.notification_controller = new NotificationController();
    this.confirmation_controller = new ConfirmationController();
    this.background_controller = new BackgroundController();
  }

  startApp(): void {
    this.loading_controller.init();
    this.task_controller.init();
    this.notification_controller.init();
    this.confirmation_controller.init();
  }
}
