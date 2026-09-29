import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { About } from './about';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate active days and initialize who cards', () => {
    expect(component.whoCards.length).toBe(5);
    expect(component.whenCount).toContain('days');
    expect(component.timelineData.length).toBe(4);
  });

  it('should filter timeline items by type', () => {
    component.setFilter('experience');
    expect(component.filteredTimeline.length).toBe(2);
    expect(component.filteredTimeline.every((i) => i.type === 'experience')).toBeTrue();

    component.setFilter('education');
    expect(component.filteredTimeline.length).toBe(2);
    expect(component.filteredTimeline.every((i) => i.type === 'education')).toBeTrue();

    component.setFilter('all');
    expect(component.filteredTimeline.length).toBe(4);
  });
});
